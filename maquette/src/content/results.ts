import type { ResultRow, Step } from "./types";

/**
 * RÉSULTATS — valeurs de DÉMONSTRATION (fictives). Le site actuel publie ses propres chiffres :
 * ils pourront être repris ici après validation par l'établissement (année, examen, établissement,
 * admis, présentés). Le taux est calculé automatiquement.
 */
export const results: ResultRow[] = [
  { year: "2025-2026", exam: "BEPC", unit: "Collège Anador Abobo", admitted: 180, candidates: 200, status: "demo" },
  { year: "2025-2026", exam: "BEPC", unit: "Collège Anador Yopougon", admitted: 150, candidates: 170, status: "demo" },
  { year: "2025-2026", exam: "BAC", unit: "Collège Anador Abobo", admitted: 120, candidates: 160, status: "demo" },
  { year: "2025-2026", exam: "BAC", unit: "Collège Anador Yopougon", admitted: 110, candidates: 150, status: "demo" },
  { year: "2025-2026", exam: "CEPE", unit: "Anador Junior Abobo", admitted: 95, candidates: 100, status: "demo" },
  { year: "2025-2026", exam: "CEPE", unit: "Anador Junior Yopougon", admitted: 88, candidates: 92, status: "demo" },
  { year: "2024-2025", exam: "BEPC", unit: "Collège Anador Abobo", admitted: 170, candidates: 205, status: "demo" },
  { year: "2024-2025", exam: "BEPC", unit: "Collège Anador Yopougon", admitted: 140, candidates: 168, status: "demo" },
  { year: "2024-2025", exam: "BAC", unit: "Collège Anador Abobo", admitted: 112, candidates: 158, status: "demo" },
  { year: "2024-2025", exam: "BAC", unit: "Collège Anador Yopougon", admitted: 101, candidates: 149, status: "demo" },
];

/** INSCRIPTIONS — parcours en étapes (contenu de démonstration à valider). */
export const admissionSteps: Step[] = [
  { title: "Choisir l'établissement", text: "Comparez les campus d'Abobo et de Yopougon et les niveaux proposés." },
  { title: "Préparer le dossier", text: "Rassemblez les pièces demandées (liste officielle à confirmer par l'établissement)." },
  { title: "Prendre rendez-vous", text: "Envoyez une demande d'information : l'établissement vous rappelle pour fixer un rendez-vous." },
  { title: "Finaliser l'inscription", text: "Dépôt du dossier et règlement des frais sur place, selon les modalités officielles." },
];

export const admissionDocuments = [
  "Extrait d'acte de naissance (à confirmer)",
  "Bulletins de l'année précédente (à confirmer)",
  "Photos d'identité (nombre à confirmer)",
  "Certificat de scolarité ou de radiation (à confirmer)",
];

export const admissionFaq = [
  { q: "Quand les inscriptions ouvrent-elles ?", a: "Les dates officielles seront publiées ici par l'établissement (donnée à confirmer)." },
  { q: "Peut-on payer les frais en plusieurs fois ?", a: "Modalités de paiement à confirmer avec l'établissement." },
  { q: "Dois-je envoyer des documents en ligne ?", a: "Non : cette maquette ne collecte aucune pièce justificative. Le dossier se dépose auprès de l'établissement." },
];
