import type { NewsItem } from "./types";

/**
 * ACTUALITÉS — articles de démonstration (fictifs). Ajoutez un objet par article.
 * L'ordre du tableau n'a pas d'importance : le site trie toujours par date, du plus récent au plus ancien,
 * et n'affiche jamais un article daté dans le futur (voir src/lib/news.ts).
 */
export const news: NewsItem[] = [
  {
    slug: "journee-portes-ouvertes",
    title: "Journée portes ouvertes : venez découvrir nos campus",
    date: "2026-09-12",
    category: "Inscriptions",
    excerpt: "Exemple d'article : visite des salles, rencontre avec les équipes pédagogiques et réponses aux questions des familles.",
    body: [
      "Ceci est un article de démonstration, rédigé pour illustrer la rubrique actualités.",
      "Chaque article dispose de sa propre page, d'une date vérifiée à la saisie, d'une catégorie et d'une image optimisée.",
    ],
    image: "actu-1.webp",
    status: "demo",
  },
  {
    slug: "rentree-scolaire",
    title: "Rentrée scolaire : les informations pratiques",
    date: "2026-09-01",
    category: "Vie scolaire",
    excerpt: "Exemple d'article : calendrier de la rentrée, fournitures, horaires des premiers jours.",
    body: ["Article de démonstration : contenu à remplacer par les informations officielles de l'établissement."],
    image: "actu-2.webp",
    status: "demo",
  },
  {
    slug: "journee-carriere",
    title: "Journée carrière : les élèves rencontrent des professionnels",
    date: "2026-02-11",
    category: "Orientation",
    excerpt: "Exemple d'article inspiré d'un événement annoncé sur le site actuel ; texte et photos à fournir par l'établissement.",
    body: ["Article de démonstration. Le contenu réel, les photos et l'autorisation des personnes photographiées seront fournis par l'établissement."],
    image: "actu-3.webp",
    status: "demo",
  },
  {
    slug: "club-sciences",
    title: "Le club sciences présente ses projets",
    date: "2026-05-20",
    category: "Clubs",
    excerpt: "Exemple d'article : expériences, maquettes et prix décernés par le jury.",
    body: ["Article de démonstration."],
    image: "actu-4.webp",
    status: "demo",
  },
];
