# Proposition RealSpill — Groupe scolaire Anador

Travail **indépendant**, sans contact avec l'établissement, sans modification du site officiel et sans
accès aux espaces d'administration. Rien n'est publié ; ce dépôt doit rester **privé**.

- [`audit/RAPPORT-AUDIT.md`](audit/RAPPORT-AUDIT.md) — audit en 9 axes : problèmes **confirmés**,
  anomalies **à vérifier** et **améliorations recommandées**, avec preuves (`audit/evidence/` :
  HTML des pages publiques, rapport Lighthouse mobile, captures 390 px).
- [`maquette/`](maquette/) — maquette indépendante (Next.js + TypeScript + Tailwind CSS) : accueil,
  établissements, fiches par campus, parcours d'inscription, actualités, résultats, contacts.
- [`maquette/INFOS-A-OBTENIR.md`](maquette/INFOS-A-OBTENIR.md) — éléments à valider avant toute réalisation.

```bash
cd maquette && npm install && npm run dev   # http://localhost:3000
```
