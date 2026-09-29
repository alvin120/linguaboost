# Faire fonctionner le professeur IA

Le professeur IA (Emma, Lucía, Rafael) a besoin d'un petit serveur. La clé d'API ne doit **jamais** se trouver dans une page HTML, sinon n'importe quel visiteur pourrait la voler. C'est pour cela que la page [maquettes/professeur.html](../maquettes/professeur.html) ne fonctionne pas en double-cliquant sur le fichier.

## 1. Obtenir une clé d'API

1. Aller sur https://console.anthropic.com, créer un compte et ajouter un moyen de paiement (facturation à l'usage).
2. Aller dans **API Keys**, puis **Create Key**, et copier la clé (`sk-ant-…`).

## 2. Tester sur votre ordinateur

Dans le dossier du projet :

```bash
npm install
```

Créer un fichier `.env` à la racine du projet (il est ignoré par git) :

```
ANTHROPIC_API_KEY=sk-ant-votre-cle
```

Puis lancer le serveur :

```bash
npm run dev
```

Ouvrir http://localhost:3000/maquettes/professeur.html.

## 3. Mettre en ligne (Vercel, déjà relié au projet « linguaboost »)

1. Sur vercel.com, ouvrir le projet **linguaboost**, puis **Settings → Environment Variables**.
2. Ajouter `ANTHROPIC_API_KEY` avec votre clé, pour Production et Preview.
3. Redéployer (`vercel --prod`, ou pousser sur GitHub si le dépôt est relié).
4. La page est alors disponible à `https://<votre-domaine>/maquettes/professeur.html`.

## Fonctionnement

- [api/professeur.js](../api/professeur.js) reçoit le profil de l'élève et l'historique, puis appelle Claude (`claude-opus-5`) avec le prompt du professeur ([api/_prompts.js](../api/_prompts.js)).
- La réponse est un JSON imposé : réponse, question de relance, corrections, version naturelle, « À toi », vocabulaire, bilan et score estimé. La page l'affiche sous forme de bulles et de tableaux.
- Le prompt fixe (socle + fiche) est mis en cache, ce qui réduit le coût des messages suivants.
- **Vocal** : dictée au micro et lecture à voix haute avec les voix du navigateur (Chrome et Edge conseillés).

## Limites actuelles (prototype)

- Aucune connexion n'est demandée : la limite de 5 messages par jour de l'offre gratuite n'est pas encore appliquée. **N'importe qui peut utiliser la page et consommer votre crédit.** Avant une mise en ligne publique, il faut ajouter la connexion (Supabase) et le compteur `usage_quotidien` (livrable 3), ou au minimum une limite de dépenses dans la console Anthropic.
- L'historique n'est pas sauvegardé : il disparaît quand on recharge la page. Il sera enregistré dans `conversations_ia` et `messages_ia` au moment du MVP.
