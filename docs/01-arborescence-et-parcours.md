# LinguaBoost — Livrable 1 : arborescence du site et parcours utilisateur

> Anglais 🇬🇧🇺🇸 · Espagnol 🇪🇸🌎 · Portugais 🇧🇷🇵🇹, pour des francophones, du niveau A1 au niveau C2.
> Statut : **validé** (étape 1 sur 7), le 28/09/2026.

---

## 0. Principes de structure

| Principe | Décision |
|---|---|
| **Deux types de pages** | *Pages publiques* (marketing, SEO, rendu statique) et *application* (espace connecté, rendu côté client, installable en PWA). |
| **Langue de l'interface** | Préfixe de locale : `/fr` (par défaut), `/en`, `/es`, `/pt`. L'interface en EN, ES ou PT sert aux francophones en immersion totale (B2+), et plus tard à une clientèle non francophone. |
| **Langue cible** | Segment après la locale, avec un slug traduit : `/fr/anglais/...`, `/fr/espagnol/...`, `/fr/portugais/...` (`/en/spanish/...`, etc.). |
| **Variante** | C'est un réglage de l'élève (UK/US, Espagne/Amérique latine, Brésil/Portugal), pas une URL. Chaque contenu porte l'étiquette de sa variante. |
| **Couleur d'accent** | Anglais : bleu `#2563EB` · Espagnol : rouge-orangé `#EA580C` · Portugais : vert `#059669`. La marque LinguaBoost garde son violet `#8B5CF6`. |
| **Sessions courtes** | Toute page de l'application doit permettre une action utile en moins de 5 minutes (révision, exercice, message au professeur). |

---

## 1. Arborescence complète

### 1.1 Site public (SEO, accessible sans compte)

```
/fr                                   Accueil
├── /langues                          Choisir une langue (comparatif EN / ES / PT)
│   ├── /anglais                      Page langue : niveaux, examens, prof Emma, variantes
│   ├── /espagnol                     … prof Lucía
│   └── /portugais                    … prof Rafael
├── /test-de-niveau                   Présentation du test, puis lancement (sans compte)
│   └── /{langue}/resultat            Résultat : niveau CECRL, score estimé, parcours proposé
├── /examens                          Présentation des simulateurs
│   ├── /toeic                        TOEIC L&R (+ S&W, IELTS, Cambridge B2 First / C1 Advanced)
│   ├── /dele                         DELE A1 → C2 et SIELE
│   └── /celpe-bras                   CELPE-Bras (+ CAPLE)
├── /professeurs                      Emma, Lucía, Rafael : personnalité et méthode
├── /methode                          Méthode pédagogique (CECRL, répétition espacée, i+1)
├── /tarifs                           Gratuit · Premium · Pack examen · Entreprise
├── /entreprises                      Offre B2B : tourisme, hôtellerie, anglais pro
├── /ecoles                           Offre professeurs et établissements
├── /blog                             Conseils TOEIC, DELE, CELPE-Bras, voyage, faux amis
│   ├── /categorie/{slug}
│   └── /{slug-article}
├── /ressources                       Pages SEO « outils gratuits »
│   ├── /faux-amis/{paire}            ex. /faux-amis/francais-anglais
│   ├── /conjugaison/{langue}/{verbe} Tableaux de conjugaison publics (fort potentiel SEO)
│   └── /phonetique/{langue}          Alphabet phonétique interactif (aperçu)
├── /faq                              FAQ (balisage FAQPage)
├── /contact
├── /connexion · /inscription · /mot-de-passe-oublie
└── /legal
    ├── /mentions-legales
    ├── /confidentialite              Politique de confidentialité (RGPD)
    ├── /cookies
    ├── /cgu
    └── /cgv
```

### 1.2 Application élève (connecté, PWA)

```
/fr/app
├── /                                  Accueil du jour : objectif, révisions dues, leçon suivante, streak
├── /onboarding                        Langue(s), variante, objectif, temps par jour, niveau (test ou choix)
│
├── /{langue}                          Espace d'une langue (couleur d'accent)
│   ├── /parcours                      Carte des niveaux A1 → C2
│   │   └── /{niveau}                  Unités du niveau
│   │       └── /{unite}               Sommaire de l'unité (8 étapes)
│   │           └── /lecon/{etape}     découverte · comprehension · vocabulaire · grammaire
│   │                                  pratique · production · culture · bilan
│   ├── /exercices                     Entraînement libre, filtré par compétence et par type
│   │   └── /{type}/{id}               QCM, trous, dictée, paires minimales, shadowing…
│   ├── /competences
│   │   ├── /ecoute                    Audios par accent, vitesse réglable, dictées
│   │   ├── /lecture                   Textes avec mots cliquables
│   │   ├── /ecriture                  Sujets et corrections IA (grilles officielles)
│   │   └── /oral                      Enregistrement, score de prononciation, jeux de rôle
│   ├── /examens
│   │   ├── /{examen}                  toeic | dele-{niveau} | siele | celpe-bras | caple | ielts…
│   │   │   ├── /strategies            Stratégies et pièges par partie
│   │   │   ├── /entrainement/{partie} Entraînement par partie
│   │   │   └── /examen-blanc/{id}     Épreuve chronométrée, puis rapport détaillé
│   │   └── /historique                Scores estimés et évolution
│   ├── /vocabulaire
│   │   ├── /revisions                 Session de révision espacée du jour
│   │   ├── /listes                    Listes thématiques et spéciales (TOEIC business, faux amis, argot)
│   │   └── /mes-cartes                Flashcards personnelles
│   ├── /grammaire
│   │   ├── /{niveau}/{fiche}          Fiche : règle, comparaison FR, erreurs typiques, exercices
│   │   └── /conjugaison/{verbe}       Tableau interactif (tous temps et tous modes)
│   ├── /prononciation
│   │   ├── /alphabet                  API interactif
│   │   ├── /sons-difficiles           Sons ciblés pour les francophones
│   │   └── /intonation                Accent tonique, rythme, liaisons
│   └── /culture
│       ├── /actualites                Actualités simplifiées par niveau (chaque semaine)
│       ├── /fiches                    Fêtes, gastronomie, usages pro, régions
│       └── /medias                    Podcasts, séries, chansons (thèmes et vocabulaire, sans paroles)
│
├── /professeur                        Choix : Emma · Lucía · Rafael
│   └── /{prof}
│       ├── /conversation/{id}         Chat texte et vocal
│       └── nouveau : mode             libre · jeu de rôle · examen · grammaire · correction
│
├── /tableau-de-bord                   Radar par compétence, progression, temps, mots, scores estimés
├── /defis                             Défis de la semaine, classements (facultatifs)
├── /badges · /certificats             Badges, certificats internes de fin de niveau (PDF)
└── /compte
    ├── /profil                        Objectifs, centres d'intérêt, variante préférée
    ├── /preferences                   Langue d'interface, mode sombre, notifications, vitesse audio
    ├── /abonnement                    Offre, factures (portail Stripe)
    └── /donnees                       Export et suppression des données (RGPD)
```

### 1.3 Espace professeur et entreprise (B2B)

```
/fr/pro
├── /                                  Vue d'ensemble : classes, activité, alertes
├── /classes/{id}                      Élèves, progression, niveau par compétence
│   ├── /devoirs                       Créer ou affecter : unité, exercice, examen blanc, date limite
│   └── /rapports                      Exports PDF et CSV
├── /eleves/{id}                       Fiche élève détaillée
├── /licences                          (Entreprise) sièges, invitations, SSO
└── /rh                                (Entreprise) tableau de bord RH : taux d'usage, progression par service
```

### 1.4 Navigation

- **Site public (en-tête)** : Langues ▾ · Test de niveau · Examens ▾ · Tarifs · Entreprises · Blog · [Se connecter] · [**Commencer gratuitement**]
- **Application mobile (barre du bas, 5 onglets)** : 🏠 Aujourd'hui · 🗺️ Parcours · 🔁 Réviser (avec le nombre de cartes dues) · 💬 Professeur · 📊 Progrès
- **Application desktop** : barre latérale avec les mêmes 5 entrées, plus Exercices, Examens, Grammaire, Prononciation et Culture ; sélecteur de langue cible en haut (EN / ES / PT, avec la couleur d'accent).

### 1.5 Accès selon l'offre

| Zone | Gratuit | Premium | Pack examen | Entreprise |
|---|:-:|:-:|:-:|:-:|
| Test de positionnement | ✅ | ✅ | ✅ | ✅ |
| Parcours | 1ʳᵉ unité de chaque niveau | ✅ tout | ✅ tout | ✅ tout |
| Exercices libres | 10 par jour | illimités | illimités | illimités |
| Révision espacée | ✅ (plafond de 20 cartes par jour) | ✅ | ✅ | ✅ |
| Professeur IA | 5 messages par jour | illimité* | illimité* | illimité* |
| Correction IA d'une production | 1 par semaine | ✅ | ✅ | ✅ |
| Simulateurs d'examen | 1 mini-test par examen | entraînement par partie | + examens blancs complets + plan sur 4 à 8 semaines | selon la licence |
| Tableau de bord RH, classes | — | — | — | ✅ |

\* avec une limite d'usage raisonnable (anti-abus) indiquée dans les CGU.

---

## 2. Parcours utilisateur

### Parcours A — Première visite, jusqu'à la première leçon (objectif : moins de 10 min avant la 1ʳᵉ réussite)

```
Accueil (/fr)
  └─ CTA « Tester mon niveau gratuitement »
      └─ Choix de la langue (EN / ES / PT) et de la variante (question : « Plutôt Londres ou New York ? »)
          └─ Test adaptatif (15-20 min, SANS compte ; progression enregistrée dans le navigateur)
              ├─ Grammaire et vocabulaire (adaptatif)
              ├─ Compréhension écrite
              ├─ Compréhension orale
              └─ Production écrite courte (corrigée par l'IA)
          └─ Résultat partiel : « Niveau estimé : B1 » (visible sans compte)
              └─ Créer un compte pour voir le détail et sauvegarder (email, Google ou Apple)
                  └─ Résultat complet : CECRL par compétence, score TOEIC / DELE / CELPE-Bras estimé,
                     points forts et points faibles, parcours personnalisé
                      └─ Onboarding express : objectif (voyage, TOEIC, travail…) et temps par jour (10 / 20 / 30 min)
                          └─ 1ʳᵉ leçon recommandée → 1ʳᵉ série de 1 jour 🔥
```

*Variante :* « Je suis grand débutant », pour passer le test et commencer directement en A1.

### Parcours B — Session quotidienne type (10 à 30 minutes, sur mobile)

```
Notification (« Emma t'attend : 12 cartes à réviser, 8 minutes »)
  └─ /app (Aujourd'hui)
      1. Révisions espacées dues (3-5 min)
      2. Étape suivante de la leçon en cours (5-10 min)
      3. Mini-défi du jour : paire minimale, shadowing ou dictée (2 min)
      4. Facultatif : 5 minutes de conversation avec le professeur IA
  └─ Écran de fin : XP gagnés, série mise à jour, erreurs ajoutées aux révisions
```

### Parcours C — Préparation d'un examen (ex. : TOEIC dans 6 semaines)

```
/examens/toeic → « Préparer le TOEIC » → diagnostic (mini-test de 30 min, score estimé sur 990)
  └─ Objectif (ex. 785) et date de l'examen → plan sur 6 semaines généré
      └─ Chaque semaine : entraînement ciblé par partie, révision du vocabulaire TOEIC business,
         stratégies (ex. : les pièges des distracteurs sonores de la partie 2)
      └─ Semaines 2, 4 et 6 : examen blanc complet chronométré (200 questions, 2 h)
          └─ Rapport : score estimé par partie, erreurs, recommandations → le plan s'ajuste
```
Même logique pour le **DELE** (4 épreuves, oral simulé avec Lucía comme examinatrice) et pour le **CELPE-Bras** (tâches intégrées, interaction face à face avec Rafael).
⚠️ Chaque score affiché porte la mention : *« Estimation indicative, pas une certification officielle. »*

### Parcours D — Conversation avec le professeur IA

```
Onglet Professeur → choix du professeur (lié à la langue active)
  └─ Choix du mode : libre · jeu de rôle (hôtel, aéroport, entretien, restaurant, réunion, négociation)
                     · préparation d'examen · explication de grammaire · correction de texte
      └─ Échange (texte ou voix) adapté au niveau, avec les consignes en FR, bilingues ou en langue cible selon le niveau
          └─ Fin d'échange : tableau « erreur → correction → explication » (3 erreurs maximum)
              └─ [Ajouter aux révisions] · [Refaire la scène] · [Exercice ciblé]
      └─ La mémoire de l'élève est mise à jour (erreurs récurrentes, centres d'intérêt)
```

### Parcours E — Passage à Premium

Points de conversion, sans jamais bloquer une session en cours :
1. Unité 2 d'un niveau verrouillée : aperçu du contenu, puis offre.
2. Limite de messages du professeur IA atteinte : « Continue avec Emma sans limite ».
3. Après un bon résultat : « Tu progresses vite : débloque les examens blancs ».
4. Page `/tarifs`, puis Stripe Checkout, puis retour dans l'application avec tout le contenu débloqué.

### Parcours F — Professeur ou responsable RH (B2B)

```
/entreprises → demande de démo ou achat de licences
  └─ Création de l'organisation → invitation des salariés (CSV ou lien) → chacun passe le test de positionnement
      └─ /pro : classes par service ou par niveau → affectation de devoirs → suivi → export PDF mensuel
```

---

## 3. Immersion progressive (règle transversale)

| Niveau | Consignes | Explications de grammaire | Professeur IA | Corrections |
|---|---|---|---|---|
| A1 | Français | Français, avec exemples en langue cible | Phrases très courtes, reformulation en FR si besoin | En français |
| A2 | Bilingues (langue cible, puis FR en petit) | Français, avec exemples en langue cible | Phrases simples, reformulation en FR si besoin | En français |
| B1 | Langue cible (FR pour une règle difficile) | Langue cible simple + comparaison en FR | Langue cible, FR seulement pour une règle difficile | En langue cible (mot FR entre parenthèses si besoin) |
| B2-C2 | 100 % langue cible | Langue cible | 100 % langue cible | Langue cible (le FR reste disponible avec un bouton « Expliquer en français ») |

---

## 4. Référencement (SEO)

- **Rendu statique** : accueil, pages langues, examens, tarifs, blog, FAQ, ressources (conjugaison, faux amis, phonétique).
- **Schema.org** : `Course` (pages langues et examens), `FAQPage` (FAQ et bas des pages examens), `Article` (blog), `Organization`, `BreadcrumbList`.
- **Hreflang** entre `/fr`, `/en`, `/es` et `/pt`.
- **Mots-clés prioritaires** (à valider au livrable 7) : « préparer le TOEIC en ligne », « test niveau anglais gratuit », « DELE B1 préparation », « CELPE-Bras preparação / préparation », « faux amis anglais français », « conjugaison espagnol subjonctif ».
- `/app` et `/pro` : `noindex`.

---

## 5. Décisions validées

1. **Stack** : option (b). Les maquettes et le prototype sont en HTML, CSS et JS statiques (on les ouvre d'un double-clic). La migration vers Next.js + Tailwind se fera au moment du MVP.
2. **Nom de marque** : **LinguaBoost**.
3. **Slugs d'URL** en français : `/fr/anglais/parcours/a2`.
4. **Limites de l'offre gratuite** : celles du tableau 1.5.
5. **Variantes** : **toutes sont proposées**, sans variante imposée par défaut. L'élève choisit à l'onboarding et peut changer à tout moment :
   - Anglais : 🇺🇸 US · 🇬🇧 UK (+ écoute d'accents australiens et autres) ;
   - Espagnol : 🇪🇸 Espagne · 🌎 Amérique latine (Mexique, Argentine, Colombie) ;
   - Portugais : 🇧🇷 Brésil · 🇵🇹 Portugal.

   Chaque dialogue existe dans les deux variantes principales de sa langue, avec un bouton de bascule. Les différences sont signalées (ex. : *front desk* / *reception*, *vosotros* / *ustedes*, *você* / *tu*).
