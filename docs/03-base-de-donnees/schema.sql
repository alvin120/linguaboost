-- =====================================================================
-- LinguaBoost — Livrable 3 : schéma de base de données (PostgreSQL / Supabase)
-- Utilisateurs, langues, niveaux, unités, exercices, résultats,
-- flashcards (SM-2), professeur IA, examens, gamification, abonnements, B2B, RGPD.
-- Hypothèse Supabase : auth.users existe et auth.uid() renvoie l'utilisateur connecté.
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------
-- 1. Types énumérés
-- ---------------------------------------------------------------------
create type langue_code   as enum ('en', 'es', 'pt');
create type variante_code as enum ('UK', 'US', 'ES', 'LATAM', 'BR', 'PT');
create type niveau_cecrl  as enum ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');
create type competence    as enum ('comprehension_orale', 'comprehension_ecrite', 'production_ecrite', 'production_orale', 'grammaire', 'vocabulaire');
create type etape_unite   as enum ('decouverte', 'comprehension', 'vocabulaire', 'grammaire', 'pratique', 'production', 'culture', 'bilan');
create type type_exercice as enum (
  'qcm', 'vrai_faux', 'texte_a_trous', 'glisser_deposer', 'association_image', 'remise_en_ordre',
  'dictee', 'correction_erreurs', 'reformulation', 'traduction', 'conjugaison_chrono',
  'paires_minimales', 'shadowing', 'completion_orale', 'mini_debat', 'resume_audio', 'jeu_de_role', 'reponse_courte'
);
create type professeur_code as enum ('emma', 'lucia', 'rafael');
create type mode_seance     as enum ('conversation', 'jeu_de_role', 'grammaire', 'correction_texte', 'simulation_examen', 'prononciation');
create type examen_code     as enum ('TOEIC_LR', 'TOEIC_SW', 'IELTS', 'CAMBRIDGE_B2', 'CAMBRIDGE_C1', 'DELE', 'SIELE', 'CELPE_BRAS', 'CAPLE');
create type offre_code      as enum ('gratuit', 'premium_mensuel', 'premium_annuel', 'pack_examen', 'entreprise');
create type statut_abonnement as enum ('trialing', 'active', 'past_due', 'canceled', 'incomplete', 'unpaid');
create type role_organisation as enum ('admin', 'professeur', 'rh', 'eleve');
create type source_carte  as enum ('lecon', 'professeur_ia', 'lecture', 'erreur_bilan', 'manuelle');

-- ---------------------------------------------------------------------
-- 2. Utilisateurs et profil d'apprentissage
-- ---------------------------------------------------------------------
create table profils (
  id                uuid primary key references auth.users (id) on delete cascade,
  prenom            text,
  date_naissance    date,                                  -- mineurs : consentement parental < 15 ans (non visé)
  langue_interface  text not null default 'fr' check (langue_interface in ('fr', 'en', 'es', 'pt')),
  pays              text,
  fuseau_horaire    text not null default 'Europe/Paris',
  minutes_par_jour  smallint not null default 15 check (minutes_par_jour between 5 and 120),
  theme             text not null default 'auto' check (theme in ('auto', 'clair', 'sombre')),
  vitesse_audio     numeric(3,2) not null default 1.00 check (vitesse_audio in (0.75, 1.00, 1.25)),
  notifications     jsonb not null default '{"push": true, "email": true, "heure": "19:00"}',
  centres_interet   text[] not null default '{}',
  cree_le           timestamptz not null default now(),
  maj_le            timestamptz not null default now()
);

-- Une ligne par langue apprise : niveau, variante, objectif, examen visé.
create table apprentissages (
  id               uuid primary key default gen_random_uuid(),
  utilisateur_id   uuid not null references profils (id) on delete cascade,
  langue           langue_code not null,
  variante         variante_code not null,
  niveau_actuel    niveau_cecrl not null default 'A1',
  niveaux_competences jsonb not null default '{}',          -- {"comprehension_orale": "B1", ...} → radar
  objectif         text check (objectif in ('voyage', 'travail', 'examen', 'conversation', 'tourisme_pro', 'etudes')),
  examen_vise      examen_code,
  date_examen      date,
  score_cible      text,                                    -- ex. "785", "B2", "Avançado"
  est_active       boolean not null default true,
  cree_le          timestamptz not null default now(),
  unique (utilisateur_id, langue),
  check (
    (langue = 'en' and variante in ('UK', 'US')) or
    (langue = 'es' and variante in ('ES', 'LATAM')) or
    (langue = 'pt' and variante in ('BR', 'PT'))
  )
);

-- Mémoire de l'élève pour le professeur IA (erreurs récurrentes).
create table erreurs_recurrentes (
  id               uuid primary key default gen_random_uuid(),
  utilisateur_id   uuid not null references profils (id) on delete cascade,
  langue           langue_code not null,
  motif            text not null,                           -- ex. "ser/estar", "since → for"
  exemple          text,
  categorie        text check (categorie in ('grammaire', 'vocabulaire', 'orthographe', 'prononciation', 'registre', 'faux_ami', 'calque', 'variante')),
  occurrences      integer not null default 1,
  derniere_fois    timestamptz not null default now(),
  resolue          boolean not null default false,
  unique (utilisateur_id, langue, motif)
);

-- ---------------------------------------------------------------------
-- 3. Contenu pédagogique : parcours → unités → étapes → exercices
-- ---------------------------------------------------------------------
create table medias (
  id           uuid primary key default gen_random_uuid(),
  type         text not null check (type in ('audio', 'video', 'image')),
  url          text not null,
  langue       langue_code,
  variante     variante_code,                               -- accent de l'enregistrement
  accent       text,                                        -- ex. "australien", "argentin", "carioca"
  duree_s      integer,
  transcription text,
  sous_titres_url text,                                     -- accessibilité (WCAG)
  texte_alt    text,
  licence      text not null default 'original'
);

create table unites (
  id           uuid primary key default gen_random_uuid(),
  langue       langue_code not null,
  niveau       niveau_cecrl not null,
  ordre        smallint not null,
  slug         text not null,
  titre        text not null,                               -- dans la langue cible
  titre_fr     text not null,
  theme        text not null,                               -- se présenter, voyage, travail, santé…
  tache_finale text,                                        -- approche actionnelle : "réserver une chambre"
  est_gratuite boolean not null default false,              -- offre gratuite : 1re unité de chaque niveau
  publiee      boolean not null default false,
  unique (langue, niveau, ordre),
  unique (langue, slug)
);

-- Les 8 étapes d'une unité ; "contenu" varie selon l'étape et la variante.
create table etapes (
  id           uuid primary key default gen_random_uuid(),
  unite_id     uuid not null references unites (id) on delete cascade,
  etape        etape_unite not null,
  ordre        smallint not null,
  duree_min    smallint not null default 5,
  contenu      jsonb not null default '{}',                 -- { "us": {...}, "uk": {...} } ou commun
  media_id     uuid references medias (id),
  unique (unite_id, etape)
);

create table exercices (
  id            uuid primary key default gen_random_uuid(),
  langue        langue_code not null,
  niveau        niveau_cecrl not null,
  etape_id      uuid references etapes (id) on delete set null, -- null = banque d'entraînement libre / test
  type          type_exercice not null,
  competence    competence not null,
  variante      variante_code,                                -- null = valable pour toutes les variantes
  consigne      jsonb not null,                               -- {"fr": "...", "cible": "..."} (immersion par niveau)
  enonce        jsonb not null,                               -- options, texte à trous, paires…
  reponse       jsonb not null,                               -- solution(s) acceptée(s)
  explication   jsonb,                                        -- correction + comparaison avec le français
  media_id      uuid references medias (id),
  -- Test adaptatif (théorie de la réponse à l'item) :
  difficulte_irt   numeric(5,2),                              -- paramètre b
  discrimination_irt numeric(5,2) default 1.0,                -- paramètre a
  usage_test_positionnement boolean not null default false,
  examen        examen_code,                                  -- rattaché à un simulateur (partie)
  partie_examen text,                                         -- ex. "TOEIC Part 5", "DELE B2 Prueba 3"
  tags          text[] not null default '{}',
  cree_le       timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- 4. Vocabulaire et révision espacée (SM-2)
-- ---------------------------------------------------------------------
create table vocabulaire (
  id           uuid primary key default gen_random_uuid(),
  langue       langue_code not null,
  variante     variante_code,                               -- null = commun ; sinon mot propre à la variante
  terme        text not null,                               -- chunk de préférence : "under the name…"
  traduction_fr text not null,
  genre        text check (genre in ('m', 'f', 'n', 'mf')), -- ES/PT
  api          text,                                        -- transcription phonétique
  exemple      text,
  exemple_fr   text,
  media_audio_id uuid references medias (id),
  image_url    text,
  niveau       niveau_cecrl,
  tags         text[] not null default '{}',                -- toeic_business, faux_ami, argot, idiome…
  equivalent_autre_variante uuid references vocabulaire (id), -- front desk ↔ reception
  unique (langue, variante, terme)
);

create table listes_vocabulaire (
  id          uuid primary key default gen_random_uuid(),
  langue      langue_code not null,
  slug        text not null,
  titre       text not null,
  type        text not null check (type in ('thematique', 'toeic', 'faux_amis', 'idiomes', 'argot', 'unite')),
  unite_id    uuid references unites (id) on delete cascade,
  unique (langue, slug)
);

create table listes_vocabulaire_items (
  liste_id       uuid references listes_vocabulaire (id) on delete cascade,
  vocabulaire_id uuid references vocabulaire (id) on delete cascade,
  ordre          smallint,
  primary key (liste_id, vocabulaire_id)
);

create table flashcards (
  id               uuid primary key default gen_random_uuid(),
  utilisateur_id   uuid not null references profils (id) on delete cascade,
  langue           langue_code not null,
  vocabulaire_id   uuid references vocabulaire (id) on delete set null,
  recto            text,                                    -- carte personnelle si vocabulaire_id est null
  verso            text,
  exemple          text,
  source           source_carte not null default 'lecon',
  -- État SM-2
  facteur_facilite numeric(4,2) not null default 2.50 check (facteur_facilite >= 1.30),
  intervalle_jours integer not null default 0,
  repetitions      integer not null default 0,
  echecs           integer not null default 0,
  prochaine_revision timestamptz not null default now(),
  suspendue        boolean not null default false,
  cree_le          timestamptz not null default now(),
  check (vocabulaire_id is not null or (recto is not null and verso is not null))
);
create unique index flashcards_unique_vocab on flashcards (utilisateur_id, vocabulaire_id) where vocabulaire_id is not null;
create index flashcards_a_reviser on flashcards (utilisateur_id, prochaine_revision) where not suspendue;

create table revisions (
  id             bigint generated always as identity primary key,
  flashcard_id   uuid not null references flashcards (id) on delete cascade,
  utilisateur_id uuid not null references profils (id) on delete cascade,
  qualite        smallint not null check (qualite between 0 and 5), -- note SM-2
  duree_ms       integer,
  revise_le      timestamptz not null default now()
);

-- Applique l'algorithme SM-2 à une carte après une réponse (qualite 0 à 5).
create or replace function reviser_flashcard(p_carte uuid, p_qualite smallint, p_duree_ms integer default null)
returns flashcards
language plpgsql
security invoker
as $$
declare
  c flashcards;
begin
  select * into c from flashcards where id = p_carte for update;
  if not found then raise exception 'Carte introuvable'; end if;

  if p_qualite < 3 then
    c.repetitions := 0;
    c.intervalle_jours := 1;
    c.echecs := c.echecs + 1;
  else
    c.repetitions := c.repetitions + 1;
    c.intervalle_jours := case c.repetitions
      when 1 then 1
      when 2 then 6
      else ceil(c.intervalle_jours * c.facteur_facilite)::integer
    end;
  end if;
  c.facteur_facilite := greatest(1.30, c.facteur_facilite + (0.1 - (5 - p_qualite) * (0.08 + (5 - p_qualite) * 0.02)));
  c.prochaine_revision := now() + make_interval(days => c.intervalle_jours);

  update flashcards set
    repetitions = c.repetitions, intervalle_jours = c.intervalle_jours, echecs = c.echecs,
    facteur_facilite = c.facteur_facilite, prochaine_revision = c.prochaine_revision
  where id = p_carte;

  insert into revisions (flashcard_id, utilisateur_id, qualite, duree_ms)
  values (p_carte, c.utilisateur_id, p_qualite, p_duree_ms);
  return c;
end;
$$;

-- ---------------------------------------------------------------------
-- 5. Test de positionnement (adaptatif)
-- ---------------------------------------------------------------------
create table tests_positionnement (
  id               uuid primary key default gen_random_uuid(),
  utilisateur_id   uuid references profils (id) on delete cascade, -- null tant que le test est anonyme
  jeton_anonyme    text unique,                             -- rattachement après inscription
  langue           langue_code not null,
  variante         variante_code not null,
  commence_le      timestamptz not null default now(),
  termine_le       timestamptz,
  theta            numeric(5,2),                            -- estimation de compétence (IRT)
  niveau_resultat  niveau_cecrl,
  niveaux_competences jsonb,                                -- détail par compétence
  production_ecrite text,
  correction_ia    jsonb,
  -- Estimations indicatives, jamais officielles
  toeic_estime     smallint check (toeic_estime between 10 and 990),
  dele_vise        niveau_cecrl,
  celpe_bras_estime text check (celpe_bras_estime in ('sem_certificacao', 'intermediario', 'intermediario_superior', 'avancado', 'avancado_superior')),
  points_forts     text[],
  points_faibles   text[]
);

create table tests_positionnement_reponses (
  test_id      uuid references tests_positionnement (id) on delete cascade,
  ordre        smallint,
  exercice_id  uuid not null references exercices (id),
  reponse      jsonb,
  correcte     boolean,
  duree_ms     integer,
  theta_apres  numeric(5,2),
  primary key (test_id, ordre)
);

-- ---------------------------------------------------------------------
-- 6. Progression et résultats
-- ---------------------------------------------------------------------
create table progression_etapes (
  utilisateur_id uuid references profils (id) on delete cascade,
  etape_id       uuid references etapes (id) on delete cascade,
  statut         text not null default 'en_cours' check (statut in ('en_cours', 'terminee')),
  score          numeric(5,2),
  termine_le     timestamptz,
  primary key (utilisateur_id, etape_id)
);

create table resultats_exercices (
  id             bigint generated always as identity primary key,
  utilisateur_id uuid not null references profils (id) on delete cascade,
  exercice_id    uuid not null references exercices (id) on delete cascade,
  reponse        jsonb,
  correct        boolean,
  score          numeric(5,2),                              -- 0 à 100 (exercices ouverts)
  duree_ms       integer,
  contexte       text check (contexte in ('lecon', 'entrainement', 'examen', 'defi')),
  cree_le        timestamptz not null default now()
);
create index resultats_par_utilisateur on resultats_exercices (utilisateur_id, cree_le desc);

create table productions_ecrites (
  id             uuid primary key default gen_random_uuid(),
  utilisateur_id uuid not null references profils (id) on delete cascade,
  langue         langue_code not null,
  consigne       text not null,
  texte          text not null,
  grille         text,                                      -- 'cecrl', 'dele', 'ielts', 'toeic_sw', 'celpe_bras'
  correction_ia  jsonb,                                     -- version corrigée, version native, erreurs
  notes_criteres jsonb,                                     -- {"coherence": 4, "correction": 3, ...}
  cree_le        timestamptz not null default now()
);

create table productions_orales (
  id              uuid primary key default gen_random_uuid(),
  utilisateur_id  uuid not null references profils (id) on delete cascade,
  langue          langue_code not null,
  exercice_id     uuid references exercices (id) on delete set null,
  audio_url       text,                                     -- stockage privé, purgé après 90 jours
  transcription   text,
  score_global    numeric(5,2),
  scores_mots     jsonb,                                    -- [{"mot": "three", "score": 62, "phoneme": "θ"}]
  cree_le         timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- 7. Simulateurs d'examens
-- ---------------------------------------------------------------------
create table examens_blancs (
  id          uuid primary key default gen_random_uuid(),
  examen      examen_code not null,
  niveau      niveau_cecrl,                                 -- DELE A1…C2, etc.
  titre       text not null,
  version     smallint not null default 1,
  duree_min   smallint not null,
  structure   jsonb not null,                               -- parties, ordre, temps, exercices
  est_court   boolean not null default false,               -- mini-test gratuit
  publie      boolean not null default false
);

create table passages_examens (
  id              uuid primary key default gen_random_uuid(),
  utilisateur_id  uuid not null references profils (id) on delete cascade,
  examen_blanc_id uuid not null references examens_blancs (id),
  commence_le     timestamptz not null default now(),
  termine_le      timestamptz,
  reponses        jsonb not null default '{}',
  score_estime    text,                                     -- "785", "Apto", "Avançado"
  scores_parties  jsonb,                                    -- {"listening": 420, "reading": 365} ou par épreuve
  analyse_ia      jsonb,                                    -- pièges, stratégies, recommandations
  officiel        boolean not null default false check (officiel = false)
);

-- ---------------------------------------------------------------------
-- 8. Professeur IA
-- ---------------------------------------------------------------------
create table conversations_ia (
  id              uuid primary key default gen_random_uuid(),
  utilisateur_id  uuid not null references profils (id) on delete cascade,
  professeur      professeur_code not null,
  variante        variante_code not null,
  niveau          niveau_cecrl not null,
  mode            mode_seance not null,
  canal           text not null default 'texte' check (canal in ('texte', 'vocal')),
  scenario        text,                                     -- jeu de rôle : hôtel, entretien…
  commence_le     timestamptz not null default now(),
  termine_le      timestamptz,
  bilan           jsonb,                                    -- bilan de fin de séance (JSON du professeur)
  niveau_estime   niveau_cecrl
);

create table messages_ia (
  id               bigint generated always as identity primary key,
  conversation_id  uuid not null references conversations_ia (id) on delete cascade,
  role             text not null check (role in ('user', 'assistant')),
  contenu          text not null,                           -- texte élève ou JSON brut du professeur
  corrections      jsonb,                                   -- extrait pour les statistiques
  jetons_entree    integer,
  jetons_sortie    integer,
  cree_le          timestamptz not null default now()
);
create index messages_par_conversation on messages_ia (conversation_id, id);

-- Compteurs quotidiens (limites de l'offre gratuite : 5 messages IA, 10 exercices).
create table usage_quotidien (
  utilisateur_id    uuid references profils (id) on delete cascade,
  jour              date not null default current_date,
  messages_ia       integer not null default 0,
  exercices         integer not null default 0,
  corrections_ia    integer not null default 0,
  minutes_etude     integer not null default 0,
  xp                integer not null default 0,
  primary key (utilisateur_id, jour)
);

-- ---------------------------------------------------------------------
-- 9. Gamification
-- ---------------------------------------------------------------------
create table series (
  utilisateur_id    uuid primary key references profils (id) on delete cascade,
  actuelle          integer not null default 0,
  record            integer not null default 0,
  dernier_jour      date,
  gels_disponibles  smallint not null default 0             -- "gel de série" (jour manqué pardonné)
);

create table evenements_xp (
  id             bigint generated always as identity primary key,
  utilisateur_id uuid not null references profils (id) on delete cascade,
  points         integer not null,
  raison         text not null,                             -- 'exercice', 'etape', 'defi', 'serie'…
  reference_id   uuid,
  cree_le        timestamptz not null default now()
);

create table badges (
  id          text primary key,                             -- 'check_in', 'serie_30', 'toeic_700'
  titre       text not null,
  description text not null,
  icone       text
);

create table badges_obtenus (
  utilisateur_id uuid references profils (id) on delete cascade,
  badge_id       text references badges (id),
  obtenu_le      timestamptz not null default now(),
  primary key (utilisateur_id, badge_id)
);

create table defis (
  id          uuid primary key default gen_random_uuid(),
  titre       text not null,
  langue      langue_code,
  debut       date not null,
  fin         date not null,
  objectif    jsonb not null,                               -- {"type": "xp", "valeur": 500}
  check (fin >= debut)
);

create table participations_defis (
  defi_id        uuid references defis (id) on delete cascade,
  utilisateur_id uuid references profils (id) on delete cascade,
  progression    integer not null default 0,
  termine        boolean not null default false,
  visible_classement boolean not null default false,        -- classements facultatifs (opt-in)
  primary key (defi_id, utilisateur_id)
);

create table certificats (
  id             uuid primary key default gen_random_uuid(),
  utilisateur_id uuid not null references profils (id) on delete cascade,
  langue         langue_code not null,
  niveau         niveau_cecrl not null,
  delivre_le     timestamptz not null default now(),
  pdf_url        text,
  code_verification text unique not null default encode(gen_random_bytes(8), 'hex')
);

-- ---------------------------------------------------------------------
-- 10. Organisations (B2B), classes et devoirs
-- ---------------------------------------------------------------------
create table organisations (
  id          uuid primary key default gen_random_uuid(),
  nom         text not null,
  type        text not null check (type in ('entreprise', 'ecole')),
  secteur     text,                                         -- tourisme, hôtellerie…
  sieges      integer not null default 0,
  sso_config  jsonb,
  cree_le     timestamptz not null default now()
);

create table membres_organisation (
  organisation_id uuid references organisations (id) on delete cascade,
  utilisateur_id  uuid references profils (id) on delete cascade,
  role            role_organisation not null default 'eleve',
  service         text,                                     -- tableau de bord RH par service
  rejoint_le      timestamptz not null default now(),
  primary key (organisation_id, utilisateur_id)
);

create table classes (
  id              uuid primary key default gen_random_uuid(),
  organisation_id uuid not null references organisations (id) on delete cascade,
  nom             text not null,
  langue          langue_code not null,
  niveau          niveau_cecrl,
  professeur_id   uuid references profils (id) on delete set null
);

create table eleves_classes (
  classe_id      uuid references classes (id) on delete cascade,
  utilisateur_id uuid references profils (id) on delete cascade,
  primary key (classe_id, utilisateur_id)
);

create table devoirs (
  id              uuid primary key default gen_random_uuid(),
  classe_id       uuid not null references classes (id) on delete cascade,
  titre           text not null,
  unite_id        uuid references unites (id),
  exercice_ids    uuid[],
  examen_blanc_id uuid references examens_blancs (id),
  date_limite     timestamptz,
  cree_par        uuid references profils (id),
  cree_le         timestamptz not null default now()
);

create table rendus_devoirs (
  devoir_id      uuid references devoirs (id) on delete cascade,
  utilisateur_id uuid references profils (id) on delete cascade,
  statut         text not null default 'a_faire' check (statut in ('a_faire', 'en_cours', 'rendu', 'en_retard')),
  score          numeric(5,2),
  rendu_le       timestamptz,
  primary key (devoir_id, utilisateur_id)
);

-- ---------------------------------------------------------------------
-- 11. Abonnements (Stripe)
-- ---------------------------------------------------------------------
create table abonnements (
  id                     uuid primary key default gen_random_uuid(),
  utilisateur_id         uuid references profils (id) on delete cascade,
  organisation_id        uuid references organisations (id) on delete cascade,
  offre                  offre_code not null,
  statut                 statut_abonnement not null,
  examen_pack            examen_code,                       -- pack examen
  stripe_customer_id     text,
  stripe_subscription_id text unique,
  sieges                 integer,                           -- entreprise
  debut_periode          timestamptz,
  fin_periode            timestamptz,
  annule_fin_periode     boolean not null default false,
  cree_le                timestamptz not null default now(),
  check ((utilisateur_id is null) <> (organisation_id is null))
);

-- Webhooks Stripe traités une seule fois (idempotence).
create table evenements_stripe (
  id          text primary key,                             -- evt_...
  type        text not null,
  recu_le     timestamptz not null default now(),
  payload     jsonb not null
);

-- Accès premium : abonnement personnel actif, ou membre d'une organisation abonnée.
create or replace function est_premium(p_utilisateur uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from abonnements a
    where a.utilisateur_id = p_utilisateur
      and a.offre <> 'gratuit' and a.statut in ('active', 'trialing')
      and (a.fin_periode is null or a.fin_periode > now())
  ) or exists (
    select 1 from abonnements a
    join membres_organisation m on m.organisation_id = a.organisation_id
    where m.utilisateur_id = p_utilisateur
      and a.statut in ('active', 'trialing')
      and (a.fin_periode is null or a.fin_periode > now())
  );
$$;

-- ---------------------------------------------------------------------
-- 12. RGPD
-- ---------------------------------------------------------------------
create table consentements (
  id             bigint generated always as identity primary key,
  utilisateur_id uuid not null references profils (id) on delete cascade,
  type           text not null check (type in ('cgu', 'confidentialite', 'emails_marketing', 'cookies_mesure', 'enregistrement_voix')),
  accepte        boolean not null,
  version        text not null,
  cree_le        timestamptz not null default now()
);
-- Droit à l'effacement : suppression de auth.users → cascade sur toutes les données personnelles.
-- Droit à la portabilité : export JSON généré par une fonction serveur (hors schéma).

-- ---------------------------------------------------------------------
-- 13. Vues pour le tableau de bord
-- ---------------------------------------------------------------------
create view revisions_du_jour with (security_invoker = true) as
  select utilisateur_id, langue, count(*) as cartes_dues
  from flashcards
  where not suspendue and prochaine_revision <= now()
  group by utilisateur_id, langue;

create view activite_hebdomadaire with (security_invoker = true) as
  select utilisateur_id, date_trunc('week', jour)::date as semaine,
         sum(minutes_etude) as minutes, sum(xp) as xp, sum(exercices) as exercices
  from usage_quotidien
  group by utilisateur_id, date_trunc('week', jour);

-- ---------------------------------------------------------------------
-- 14. Sécurité au niveau des lignes (RLS, Supabase)
-- ---------------------------------------------------------------------
-- Données personnelles : chaque utilisateur ne voit que ses lignes.
do $$
declare t text;
begin
  foreach t in array array[
    'apprentissages', 'erreurs_recurrentes', 'flashcards', 'revisions', 'progression_etapes',
    'resultats_exercices', 'productions_ecrites', 'productions_orales', 'passages_examens',
    'conversations_ia', 'usage_quotidien', 'series', 'evenements_xp', 'badges_obtenus',
    'participations_defis', 'certificats', 'consentements'
  ] loop
    execute format('alter table %I enable row level security', t);
    execute format('create policy %I on %I for all using (utilisateur_id = auth.uid()) with check (utilisateur_id = auth.uid())', t || '_proprietaire', t);
  end loop;
end $$;

alter table profils enable row level security;
create policy profils_proprietaire on profils for all using (id = auth.uid()) with check (id = auth.uid());

alter table tests_positionnement enable row level security;
create policy tests_proprietaire on tests_positionnement for all
  using (utilisateur_id = auth.uid()) with check (utilisateur_id = auth.uid());

alter table messages_ia enable row level security;
create policy messages_proprietaire on messages_ia for all
  using (exists (select 1 from conversations_ia c where c.id = conversation_id and c.utilisateur_id = auth.uid()))
  with check (exists (select 1 from conversations_ia c where c.id = conversation_id and c.utilisateur_id = auth.uid()));

-- Contenu : lisible par tout utilisateur connecté ; le contenu premium est filtré.
alter table unites enable row level security;
create policy unites_lecture on unites for select using (publiee);

alter table etapes enable row level security;
create policy etapes_lecture on etapes for select using (
  exists (select 1 from unites u where u.id = unite_id and u.publiee and (u.est_gratuite or est_premium(auth.uid())))
);

alter table exercices enable row level security;
-- Les colonnes "reponse" et "explication" ne doivent pas partir au navigateur avant la réponse de l'élève :
-- la correction passe par une fonction serveur (service_role). Une révocation par colonne ne suffit pas
-- quand la table entière est accordée, d'où le « revoke » global puis le « grant » colonne par colonne.
create policy exercices_lecture on exercices for select using (auth.uid() is not null);
revoke select on exercices from anon, authenticated;
grant select (id, langue, niveau, etape_id, type, competence, variante, consigne, enonce, media_id,
              difficulte_irt, discrimination_irt, usage_test_positionnement, examen, partie_examen, tags, cree_le)
  on exercices to authenticated;

-- Professeurs : lecture des progrès des élèves de leurs classes.
create policy progression_professeur on progression_etapes for select using (
  exists (
    select 1 from eleves_classes ec join classes c on c.id = ec.classe_id
    where ec.utilisateur_id = progression_etapes.utilisateur_id and c.professeur_id = auth.uid()
  )
);
create policy resultats_professeur on resultats_exercices for select using (
  exists (
    select 1 from eleves_classes ec join classes c on c.id = ec.classe_id
    where ec.utilisateur_id = resultats_exercices.utilisateur_id and c.professeur_id = auth.uid()
  )
);
