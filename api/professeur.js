// POST /api/professeur — un tour de conversation avec Emma, Lucía ou Rafael.
// Fonction serverless Vercel (Node). Passe par Vercel AI Gateway : sur Vercel, le jeton OIDC
// du projet (en-tête x-vercel-oidc-token) suffit, aucune clé à créer. En local ou hors Vercel :
// AI_GATEWAY_API_KEY, ou VERCEL_OIDC_TOKEN récupéré avec « vercel env pull ».
import Anthropic from '@anthropic-ai/sdk';
import { PROFS, NIVEAUX, MODES, CANAUX, systemeStable, contexteEleve, SCHEMA_REPONSE } from './_prompts.js';

const GATEWAY = 'https://ai-gateway.vercel.sh';
// Modèle rapide et peu coûteux, adapté à la conversation. Modifiable avec AI_GATEWAY_MODEL.
const MODELE = (process.env.AI_GATEWAY_MODEL || 'anthropic/claude-haiku-5.5').trim();
const MAX_MESSAGES = 40;        // historique renvoyé par le client
const MAX_CARACTERES = 4000;    // par message (un texte à corriger peut être long)
const MAX_CHAMP = 300;          // champs du profil

function jeton(req) {
  const h = req.headers && req.headers['x-vercel-oidc-token'];
  return (process.env.AI_GATEWAY_API_KEY || (typeof h === 'string' ? h : '') || process.env.VERCEL_OIDC_TOKEN || '').trim();
}

// Le jeton OIDC change d'une invocation à l'autre : un client par requête.
function getClient(token) {
  return new Anthropic({ apiKey: null, authToken: token, baseURL: GATEWAY });
}

function court(v) {
  return typeof v === 'string' ? v.slice(0, MAX_CHAMP) : '';
}

// Valide la requête et renvoie { contexte, messages } ou { erreur }.
export function valider(body) {
  if (!body || typeof body !== 'object') return { erreur: 'Requête invalide.' };
  const { prof, variante, niveau, mode, canal, messages } = body;
  if (!PROFS[prof]) return { erreur: 'Professeur inconnu.' };
  if (!PROFS[prof].variantes.includes(variante)) return { erreur: 'Variante invalide pour ce professeur.' };
  if (!NIVEAUX.includes(niveau)) return { erreur: 'Niveau invalide.' };
  if (!MODES.includes(mode)) return { erreur: 'Mode invalide.' };
  if (!CANAUX.includes(canal)) return { erreur: 'Canal invalide.' };
  if (!Array.isArray(messages) || messages.length === 0) return { erreur: 'Aucun message.' };

  const propres = messages.slice(-MAX_MESSAGES).map((m) => ({
    role: m && m.role === 'assistant' ? 'assistant' : 'user',
    content: typeof m?.content === 'string' ? m.content.slice(0, MAX_CARACTERES) : '',
  })).filter((m) => m.content.trim() !== '');
  // L'API attend un premier message « user » et un dernier message « user ».
  while (propres.length && propres[0].role !== 'user') propres.shift();
  if (!propres.length || propres[propres.length - 1].role !== 'user') return { erreur: 'Le dernier message doit venir de l\'élève.' };

  return {
    contexte: {
      prof, variante, niveau, mode, canal,
      prenom: court(body.prenom), objectif: court(body.objectif), examen: court(body.examen),
      date_examen: court(body.date_examen), interets: court(body.interets), erreurs_recurrentes: court(body.erreurs_recurrentes),
    },
    messages: propres,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ erreur: 'Méthode non autorisée.' });
  }
  const token = jeton(req);
  if (!token) {
    return res.status(500).json({ erreur: 'Accès à Vercel AI Gateway absent : déployez sur Vercel (OIDC) ou définissez AI_GATEWAY_API_KEY.' });
  }

  const v = valider(req.body);
  if (v.erreur) return res.status(400).json({ erreur: v.erreur });

  try {
    const response = await getClient(token).messages.create({
      model: MODELE,
      max_tokens: 4000,
      output_config: {
        format: { type: 'json_schema', schema: SCHEMA_REPONSE },
      },
      system: [
        { type: 'text', text: systemeStable(v.contexte.prof), cache_control: { type: 'ephemeral' } },
        { type: 'text', text: contexteEleve(v.contexte) },
      ],
      messages: v.messages,
    });

    if (response.stop_reason === 'refusal') {
      return res.status(200).json({ refus: true, erreur: 'Le professeur ne peut pas répondre à ce message. Reformule ou change de sujet.' });
    }
    if (response.stop_reason === 'max_tokens') {
      return res.status(502).json({ erreur: 'Réponse trop longue, interrompue. Réessaie avec une demande plus courte.' });
    }

    const texte = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    let donnees;
    try {
      donnees = JSON.parse(texte);
    } catch {
      return res.status(502).json({ erreur: 'Réponse du professeur illisible. Réessaie.' });
    }
    // "brut" est renvoyé tel quel par le client au tour suivant (historique cohérent).
    return res.status(200).json({ donnees, brut: texte, usage: response.usage });
  } catch (err) {
    if (err instanceof Anthropic.AuthenticationError) {
      return res.status(500).json({ erreur: 'Accès à Vercel AI Gateway refusé (jeton OIDC ou clé invalide).' });
    }
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ erreur: 'Trop de demandes en même temps. Réessaie dans quelques secondes.' });
    }
    if (err instanceof Anthropic.BadRequestError) {
      console.error('Requête refusée par l\'API :', err.message);
      return res.status(502).json({ erreur: 'Requête refusée par le service IA.' });
    }
    if (err instanceof Anthropic.APIError && err.status === 403 && /customer_verification_required/.test(err.message)) {
      console.error('AI Gateway : carte bancaire requise sur le compte Vercel pour activer les crédits.');
      return res.status(503).json({ erreur: 'Le professeur IA n\'est pas encore activé sur ce site. Réessaie plus tard.' });
    }
    if (err instanceof Anthropic.APIError && err.status === 402) {
      return res.status(503).json({ erreur: 'Crédit IA épuisé pour le moment. Réessaie plus tard.' });
    }
    if (err instanceof Anthropic.APIError) {
      console.error('Erreur API :', err.status, err.message);
      return res.status(502).json({ erreur: 'Le service IA est momentanément indisponible.' });
    }
    console.error(err);
    return res.status(500).json({ erreur: 'Erreur interne.' });
  }
}
