import type { SiteConfig } from "./types";

const OFFICIAL = "Site officiel collegeanador.ci, consulté le 19/10/2026";

export const site: SiteConfig = {
  name: "Groupe scolaire Anador",
  shortName: "GSA",
  schemaType: "EducationalOrganization",
  tagline: "Maternelle, primaire et collège à Abobo et Yopougon",
  description:
    "Maquette de démonstration pour le Groupe scolaire Anador : établissements d'Abobo et de Yopougon, inscriptions, actualités, résultats et contacts.",
  locality: "Abidjan",
  district: "Abobo et Yopougon",
  keywords: ["école Abobo", "collège Yopougon", "groupe scolaire Abidjan", "inscription collège Abidjan", "Anador"],
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/etablissements", label: "Établissements" },
    { href: "/inscriptions", label: "Inscriptions" },
    { href: "/resultats", label: "Résultats" },
    { href: "/actualites", label: "Actualités" },
    { href: "/contact", label: "Contact" },
  ],
  primaryCta: { href: "/inscriptions", label: "Inscrire mon enfant" },
  contact: {
    address: { value: "Abobo et Yopougon, Abidjan (adresses précises à confirmer)", status: "public", source: OFFICIAL },
    // Several numbers appear on the official site; the mockup shows none until the school chooses which to publish.
    phone: { value: "Numéro à confirmer", status: "demo" },
    email: null,
    whatsapp: null,
    whatsappMessage: "Bonjour, je souhaite des informations sur les inscriptions au Groupe scolaire Anador.",
    mapsQuery: "Groupe scolaire Anador Abidjan",
    hours: {
      status: "demo",
      source: "Horaires d'accueil non trouvés sur les pages publiques.",
      rows: [{ days: "Accueil des familles", hours: "Horaires à confirmer" }],
    },
  },
  social: [],
};

/** French elision: "Campus d'Abobo", "Campus de Yopougon". */
export const campusOf = (name: string) => (/^[aeiouyéè]/i.test(name) ? `Campus d'${name}` : `Campus de ${name}`);

/** Labels and routes shared by the education template. */
export const copy = {
  heroEyebrow: "Groupe scolaire · Abobo & Yopougon",
  heroTitle: "Discipline, émulation, rigueur\u00a0: la réussite se construit ensemble.",
  heroText:
    "Deux campus, quatre établissements de la maternelle au collège. Trouvez l'établissement de votre enfant, préparez l'inscription et suivez la vie de l'école.",
  unitsLabel: "Établissements",
  unitsPath: "/etablissements",
  unitsIntro: "Quatre établissements répartis sur deux campus. Choisissez un campus ou un cycle pour affiner la liste.",
  unitSingular: "établissement",
  admissionsLabel: "Inscriptions",
  admissionsPath: "/inscriptions",
  profils: [
    { value: "parent", label: "Parent ou tuteur" },
    { value: "eleve", label: "Élève" },
    { value: "autre", label: "Autre" },
  ],
  pathways: [
    { title: "Découvrir un établissement", text: "Maternelle, primaire ou collège, à Abobo ou à Yopougon.", href: "/etablissements" },
    { title: "Préparer l'inscription", text: "Étapes, dossier, frais et demande de rendez-vous.", href: "/inscriptions" },
    { title: "Consulter les résultats", text: "Résultats aux examens présentés par année et par campus.", href: "/resultats" },
  ],
};
