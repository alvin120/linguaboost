// POST /api/professeur — un tour de conversation avec Emma, Lucía ou Rafael.
// Fonction serverless Vercel (Node). La clé ANTHROPIC_API_KEY reste côté serveur.
import Anthropic from '@anthropic-ai/sdk';
import { PROFS, NIVEAUX, MODES, CANAUX, systemeStable, contexteEleve, SCHEMA_REPONSE } from './_prompts.js';

const MODELE = 'claude-opus-5';
const MAX_MESSAGES = 40;        // historique renvoyé par le client
const MAX_CARACTERES = 4000;    // par message (un texte à corriger peut être long)
const MAX_CHAMP = 300;          // champs du profil

// La clé peut aussi s'appeler LANGUE1 (nom donné dans les réglages Vercel).
function cleApi() {
  return (process.env.ANTHROPIC_API_KEY || process.env.LANGUE1 || '').trim();
}

let client;
function getClient() {
  if (!client) client = new Anthropic({ apiKey: cleApi() });
  return client;
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
  if (!cleApi()) {
    return res.status(500).json({ erreur: 'Clé ANTHROPIC_API_KEY absente côté serveur. Ajoutez-la dans les variables d\'environnement (Vercel ou fichier .env local).' });
  }

  const v = valider(req.body);
  if (v.erreur) return res.status(400).json({ erreur: v.erreur });

  try {
    const response = await getClient().beta.messages.create({
      model: MODELE,
      max_tokens: 16000,
      // Si le modèle refuse une requête, l'API la relance sur le modèle de secours recommandé.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: {
        effort: 'medium', // conversation : réactivité avant profondeur
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
      return res.status(500).json({ erreur: 'Clé API invalide côté serveur.' });
    }
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ erreur: 'Trop de demandes en même temps. Réessaie dans quelques secondes.' });
    }
    if (err instanceof Anthropic.BadRequestError) {
      console.error('Requête refusée par l\'API :', err.message);
      return res.status(502).json({ erreur: 'Requête refusée par le service IA.' });
    }
    if (err instanceof Anthropic.APIError) {
      console.error('Erreur API :', err.status, err.message);
      return res.status(502).json({ erreur: 'Le service IA est momentanément indisponible.' });
    }
    console.error(err);
    return res.status(500).json({ erreur: 'Erreur interne.' });
  }
}
