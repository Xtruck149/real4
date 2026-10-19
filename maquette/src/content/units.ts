import type { Unit } from "./types";

/**
 * ÉTABLISSEMENTS — modifiez ce fichier pour mettre à jour les pages campus.
 * Les noms et campus figurent sur le site officiel ; adresses, contacts, horaires, effectifs
 * et descriptions détaillées sont à confirmer (statut "demo").
 */
const OFFICIAL = "Site officiel collegeanador.ci, consulté le 19/10/2026";
const toConfirm = (what: string) => ({ value: `${what} à confirmer`, status: "demo" as const });

export const units: Unit[] = [
  {
    slug: "college-anador-abobo",
    name: "Collège Anador Abobo",
    group: "Abobo",
    kind: "Collège",
    levels: ["6e – 3e", "Seconde – Terminale", "Enseignement technique"],
    summary: "Enseignement secondaire général et technique, du premier cycle au baccalauréat.",
    highlights: ["Préparation au BEPC et au BAC", "Filières techniques (à confirmer)", "Encadrement par niveau"],
    image: "campus-abobo.webp",
    status: "public",
    source: OFFICIAL,
    address: toConfirm("Adresse précise"),
    phone: toConfirm("Contact de l'établissement"),
    hours: toConfirm("Horaires d'accueil"),
    mapsQuery: "Collège Anador Abobo Abidjan",
  },
  {
    slug: "college-anador-yopougon",
    name: "Collège Anador Yopougon",
    group: "Yopougon",
    kind: "Collège",
    levels: ["6e – 3e", "Seconde – Terminale", "Enseignement technique"],
    summary: "Accompagner chaque élève vers la réussite, du premier cycle au baccalauréat.",
    highlights: ["Préparation au BEPC et au BAC", "Filières techniques (à confirmer)", "Vie scolaire et clubs"],
    image: "campus-yopougon.webp",
    status: "public",
    source: OFFICIAL,
    address: toConfirm("Adresse précise"),
    phone: toConfirm("Contact de l'établissement"),
    hours: toConfirm("Horaires d'accueil"),
    mapsQuery: "Collège Anador Yopougon Abidjan",
  },
  {
    slug: "anador-junior-abobo",
    name: "Anador Junior Abobo",
    group: "Abobo",
    kind: "Maternelle & primaire",
    levels: ["Maternelle", "CP1 – CM2"],
    summary: "Préscolaire et primaire : les premiers apprentissages dans un cadre bienveillant.",
    highlights: ["Préparation au CEPE", "Suivi personnalisé (exemple)", "Activités d'éveil (exemple)"],
    image: "junior-abobo.webp",
    status: "public",
    source: OFFICIAL,
    address: toConfirm("Adresse précise"),
    phone: toConfirm("Contact de l'établissement"),
    hours: toConfirm("Horaires d'accueil"),
    mapsQuery: "Anador Primaire Abobo Abidjan",
  },
  {
    slug: "anador-junior-yopougon",
    name: "Anador Junior Yopougon",
    group: "Yopougon",
    kind: "Maternelle & primaire",
    levels: ["Maternelle", "CP1 – CM2"],
    summary: "Préscolaire et primaire à Yopougon, avec un suivi régulier des familles.",
    highlights: ["Préparation au CEPE", "Suivi personnalisé (exemple)", "Activités d'éveil (exemple)"],
    image: "junior-yopougon.webp",
    status: "public",
    source: OFFICIAL,
    address: toConfirm("Adresse précise"),
    phone: toConfirm("Contact de l'établissement"),
    hours: toConfirm("Horaires d'accueil"),
    mapsQuery: "Anador Primaire Yopougon Abidjan",
  },
];
