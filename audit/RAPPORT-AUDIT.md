# Audit du site public — Groupe scolaire Anador

| | |
|---|---|
| **Site examiné** | https://collegeanador.ci/ (pages publiques uniquement) |
| **Date** | 19/10/2026, 17:20 – 17:26 UTC |
| **Méthode** | Récupération HTML des pages publiques, rendu Chromium avec JavaScript, Lighthouse 12 (profil mobile simulé), contrôle sur viewport 390 px (iPhone 13) |
| **Hors périmètre (volontairement)** | Pages et API d'administration (`admin.php`, `dashboard/`, `auth_api.php`, `exos.php`) : **non consultées, aucune tentative de connexion** |
| **Réalisé par** | RealSpill — audit indépendant, sans contact avec l'établissement |

**Légende.** 🔴 **Problème confirmé** : observé et prouvé. 🟡 **À vérifier** : anomalie observée dont
l'interprétation doit être confirmée par l'établissement. 🔵 **Amélioration recommandée** : pas un
défaut, mais un levier d'amélioration.

> Aucune information du site n'est considérée comme fausse dans ce rapport. Les chiffres (résultats,
> frais, dates) sont repris tels qu'affichés ; seules les incohérences internes au site sont signalées.

## Synthèse

| Axe | Constat principal | Mesure |
|---|---|---|
| Performance mobile | Page d'accueil très lourde (photos PNG ~1 Mo chacune), sans compression | Lighthouse **70/100**, **10,4 Mo**, Speed Index **10,4 s** |
| Mobile | Le bouton du menu sort de l'écran | Page large de **489 px** sur un écran de 390 px |
| Accessibilité | Bouton sans nom, contrastes, ordre des titres | Lighthouse **80/100** |
| Référencement | Bonne base sur l'accueil, pages internes sans description, pas de sitemap | Lighthouse SEO **100/100** (accueil) ; `sitemap.xml` et `robots.txt` en **404** |
| Actualités | Ordre non chronologique, date future, champ date mal rempli | 6 articles analysés |
| Données des élèves | Nom et moyenne d'une élève publiés ; interfaces d'administration dans le code public | Voir §9 |
| Points forts | Contenu riche (4 établissements, résultats comparés, guide d'inscription, simulateur de frais, calendrier des devoirs), liens téléphoniques cliquables, rendu soigné sur ordinateur | — |

## 1. Page d'accueil et hiérarchie des informations

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| A1 | 🔴 | Deux `<h1>` sur chaque page interne (le logo « GS ANADOR » + le titre de page) | Analyse HTML : `h1 = ['GS ANADOR', 'Toutes nos actualités']`, idem sur les 10 pages internes testées | Logo en `<p>`/`<a>`, un seul `h1` par page |
| A2 | 🔴 | Ordre des titres non séquentiel | Lighthouse : `heading-order` en échec | Respecter h1 → h2 → h3 |
| A3 | 🔵 | L'accueil cumule 15 sections (carrousel, atouts, présentation, actualités, charte, résultats BAC/BEPC, prodiges…) : le parcours « inscrire mon enfant » n'est pas mis en avant | Liste des `h2` de l'accueil (`evidence/home-analysis.json`) | Accueil resserré : 3 parcours clairs (Découvrir un établissement / S'inscrire / Résultats) |
| A4 | 🔵 | Entrées de menu « Scolarité » et « Voir + » pointant vers `#` | `href="#"` (sous-menus déroulants) | Liens réels vers des pages d'atterrissage, utilisables sans JavaScript |

## 2. Présentation des campus d'Abobo et de Yopougon

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| C1 | 🔴 | Pages d'établissement sans adresse précise ni itinéraire : seulement « Abobo, Abidjan » / « Yopougon, Abidjan » | Pages `etablissement.php?e=college-abobo` et `?e=college-yopougon` : aucun lien de carte | Adresse, repères, bouton « Itinéraire », horaires d'accueil par campus |
| C2 | 🔴 | Même numéro de téléphone sur toutes les pages d'établissement | `tel:0707998179` sur les 4 pages ; l'accueil liste pourtant 5 numéros cliquables | Contact propre à chaque établissement |
| C3 | 🔴 | Contenu inachevé sur la page du Collège de Yopougon | Texte affiché : « Équipe en cours de présentation. Informations bientôt disponibles. » | Compléter ou masquer la section |
| C4 | 🔵 | Pages courtes (180 à 285 mots), sans photos propres à chaque campus | Analyse : 1 image par page (logo) | Galerie, équipements, niveaux proposés, chiffres clés par campus |
| C5 | 🔵 | Noms complets de nombreux éducateurs publiés (page Abobo) | Liste « Nos Éducateurs » | S'assurer de l'accord des personnes concernées |

## 3. Navigation mobile et ordinateur

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| N1 | 🔴 | **Débordement horizontal sur mobile** : la page fait 489 px de large sur un écran de 390 px ; le bouton du menu (`.mobile-menu-btn`) est en dehors de l'écran et le sous-titre du logo est coupé | Mesure Playwright (iPhone 13) : `scrollWidth 489 / viewport 390`, éléments débordants `DIV.mobile-menu-btn`, `DIV.slide active` ; capture `evidence/screens/mobile-home.png` | Corriger la largeur de l'en-tête et du carrousel (`max-width:100%`, `overflow-x:clip`), tester sur 360 px |
| N2 | 🔴 | Bouton du menu mobile sans nom accessible | Lighthouse `button-name` en échec ; libellé vide mesuré | `aria-label="Ouvrir le menu"` + `aria-expanded` |
| N3 | 🔴 | 23 cibles tactiles de moins de 24 px sur l'accueil mobile | Mesure Playwright | Cibles d'au moins 44 × 44 px |
| N4 | 🔵 | Navigation correcte sur ordinateur (menu complet, sous-menus) | Rendu Chromium 1280 px | — |

## 4. Actualités et cohérence des dates

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| D1 | 🔴 | Articles non triés par date : 01/01/2027, puis 01/05/2025, 11/02/2026, 01/05/2026, 07/10/2026 | Page `actualites.php` (6 articles) | Tri automatique du plus récent au plus ancien |
| D2 | 🟡 | Article daté du **01/01/2027**, date postérieure au jour de l'audit (19/10/2026) : « Le Groupe Scolaire Anador distingué meilleur établissement » | `actualites.php` et accueil | Vérifier la date réelle de la distinction ; empêcher les dates futures à la saisie |
| D3 | 🔴 | Le champ « date » du premier article contient du texte : `data-news-date="CONTENU: Le Groupe Scolaire Anador a le plaisir d'"` (article « paiement par Wave ») | Attribut HTML de l'article | Champ date obligatoire et typé dans l'outil de saisie |
| D4 | 🟡 | « Les inscriptions pour la rentrée **2026-2027** sont ouvertes à partir du 15 Aout **2025** » | Bandeau de l'accueil | Vérifier l'année (2025 ou 2026) ; écrire « août » |

## 5. Affichage des résultats scolaires

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| R1 | 🔵 | Taux affichés par animation JavaScript : le HTML initial contient « 0% » (valeurs réelles dans `data-target`, ex. 86,65 %) | HTML brut vs rendu après défilement ; les valeurs `data-target` sont cohérentes avec « 813 admis / 938 », « 487 admis / 715 »… | Écrire la valeur finale dans le HTML (moteurs de recherche, lecteurs d'écran, connexions lentes) et animer par-dessus |
| R2 | 🔵 | Résultats présentés uniquement en graphiques circulaires | Accueil | Tableau accessible (année, examen, campus, admis/présentés, taux), avec source et date de publication |
| R3 | 🔴 | Tableau d'honneur incomplet : 1 élève renseignée, 3 cartes « Candidat Prodige #2/#3/#4 — Moyenne -- / 20 » | Section « Nos Prodiges » | Masquer les cartes vides |

## 6. Informations sur les inscriptions

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| I1 | 🔵 | Bon contenu : guide par établissement, frais, dossier à fournir, simulateur « Combien vais-je payer ? » | `inscriptions.php`, `scolarite-*.php`, `simulateur-frais.php` | Conserver, structurer en parcours par étapes |
| I2 | 🔵 | Aucun moyen de demander un rendez-vous ou un rappel en ligne | Aucun formulaire public de contact ou de pré-inscription | Formulaire de demande d'information (sans pièces justificatives) |
| I3 | 🔴 | Pages d'inscription sans meta description | Analyse HTML des pages `inscriptions.php` et `scolarite-*.php` | Description unique par page |

## 7. Formulaires et contacts

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| F1 | 🔴 | **Aucun formulaire public** : le seul `<form>` de l'accueil est un formulaire d'administration « créer un utilisateur » (voir P2) | Analyse HTML | Formulaire de contact / demande d'information |
| F2 | 🔴 | Pas d'adresse e-mail, pas de WhatsApp, pas de liens vers les réseaux sociaux | Analyse des liens de l'accueil : 0 `mailto:`, 0 WhatsApp, 0 réseau social | Ajouter les canaux officiels |
| F3 | 🔵 | Points forts : 5 numéros cliquables (`tel:`) sur l'accueil, liens Google Maps pour les 4 établissements sur l'accueil | `evidence/home-analysis.json` | Les reprendre sur chaque page d'établissement |

## 8. Accessibilité, référencement et performances

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| P1 | 🔴 | Page d'accueil de **10,4 Mo** ; photos en PNG jusqu'à 1,1 Mo | Lighthouse : 6 images de 520 à 1 127 Kio (ex. `…FKY_0008-JPG….png`) | Conversion WebP/AVIF, redimensionnement, `srcset`, chargement différé |
| P2 | 🔴 | Pas de compression du texte, cache désactivé (`Cache-Control: no-store`) | Lighthouse `uses-text-compression`, `uses-long-cache-ttl` ; en-têtes HTTP | Activer gzip/brotli, cache long sur les fichiers statiques |
| P3 | 🔴 | Lighthouse mobile : performance 70, FCP/LCP 3,8 s, Speed Index 10,4 s | `evidence/lighthouse-mobile.json` | Objectif : LCP < 2,5 s |
| P4 | 🔴 | Accessibilité 80 : bouton sans nom, contrastes insuffisants, ordre des titres | Lighthouse | Corrections ciblées (voir N2, A2) |
| P5 | 🔴 | `robots.txt` et `sitemap.xml` en **404** | `curl` : code 404 pour les deux | Générer un sitemap et un robots.txt |
| P6 | 🔴 | Pas d'URL canonique, pas d'image Open Graph, pas de données structurées | Analyse HTML de l'accueil | Balises canoniques, OG, JSON-LD `School` par établissement |
| P7 | 🔴 | Ressource introuvable (404) chargée par l'accueil | Console navigateur : « Failed to load resource: 404 » | Supprimer la référence |
| P8 | 🔵 | SEO de base correct sur l'accueil (titre, description, `lang="fr"`, viewport) | Lighthouse SEO 100 | — |

## 9. Confidentialité et protection des données des élèves

Les points ci-dessous ont été relevés **uniquement dans le code des pages publiques**. Aucun espace
d'administration n'a été ouvert.

| # | Statut | Observation | Preuve | Recommandation |
|---|---|---|---|---|
| V1 | 🔴 | **Nom complet, classe, établissement et moyenne d'une élève mineure publiés** sur l'accueil (« Nos Prodiges ») | Section « Tableau d'honneur » | Vérifier le consentement écrit des parents ; à défaut, initiales ou prénom seul. Loi n° 2013-450 relative à la protection des données à caractère personnel (autorité : ARTCI) |
| V2 | 🔴 | **Interfaces d'administration incluses dans le HTML public** : fenêtre « créer un utilisateur » (nom, prénoms, contact, e-mail), panneaux d'édition du carrousel, des actualités, des prodiges, avec envoi de fichiers | Identifiants `addUserModal`, `usersModal`, `editorModal`, `edit-slider`, `edit-prodiges`… dans `home.html` | Ne servir ces éléments qu'aux administrateurs authentifiés, côté serveur |
| V3 | 🔴 | Le formulaire « créer un utilisateur » affiche « Utilisateur créé avec succès ! » **sans rien envoyer** | `onsubmit="event.preventDefault(); alert('Utilisateur créé avec succès !')…"` | Supprimer ou relier à une vraie action protégée |
| V4 | 🔴 | Lien « Admin » et lien vers `dashboard/index.html` visibles sur les pages publiques | Barre supérieure de chaque page | Retirer les liens publics vers l'administration |
| V5 | 🔴 | Cookie de session posé sur les pages publiques sans attributs de sécurité | En-tête : `Set-Cookie: PHPSESSID=…; path=/` (pas de `Secure`, `HttpOnly`, `SameSite`) | Ajouter `Secure; HttpOnly; SameSite=Lax` ; HSTS |
| V6 | 🟡 | Espace « Suivi scolaire » (connexion élèves/parents) | Lien `exos.php`, appels `auth_api.php` dans `main.js` | Faire réaliser un test de sécurité **autorisé** de cet espace (non effectué ici) |
| V7 | 🔵 | Aucune politique de confidentialité ni mention légale trouvée | Liens de pied de page | Page « Données personnelles » (finalités, durée, droits, contact) |

## Opportunité commerciale

Le site a un contenu riche et une vraie valeur pour les familles. Les gains se situent dans
**l'expérience mobile** (correction du débordement, poids divisé par 5 à 10), **la clarté du parcours
d'inscription**, **la fiabilité des actualités** et **la protection des données des élèves**. Une
refonte progressive est pertinente : voir la maquette indépendante dans [`../maquette/`](../maquette/).

**Priorités proposées** : 1) V1, V2, V4, V5 (données et sécurité) · 2) N1, N2, P1, P2 (mobile et
performances) · 3) D1–D4, R3, C3 (fiabilité des contenus) · 4) parcours d'inscription et pages campus.
