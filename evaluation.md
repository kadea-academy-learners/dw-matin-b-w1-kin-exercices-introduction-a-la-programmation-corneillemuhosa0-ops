# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-18 12:47 UTC · commit `e985a3b` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **12 / 15**

Exercices : **70 / 95** · Parfaits : 8 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **4** | 🟡 Règles non respectées | 5/5 | 3 | ✅ | Le résultat est bon, mais les règles ne sont pas toutes respectées : const par défaut, justification en commentaire, un seul gabarit littéral.<br>• `let` jamais réassigné : `age` → utilise `const`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F2** — Le convertisseur de saisie | **3** | 🟠 Résultat incorrect | 2/3 | 3 | ✅ | Le résultat ne correspond pas : on attend 2500500 (le piège '2500' + 500), puis 3000, puis 0, NaN, 42, 1.<br>• Affiche Number(''), Number('abc'), Number(' 42 ') et Number(true) dans cet ordre : 0, NaN, 42, 1.<br>• Explique en commentaire pourquoi le résultat est faux et note tes prédictions avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F4** — Le contrôleur du bus | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! Ternaire simple et conditions à trois branches corrects, bornes respectées.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 3 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **F6** — Le compte à rebours | **3** | 🟠 Résultat incorrect | 1/2 | 3 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• La version qui affiche seulement les pairs (10, 8, 6, 4, 2) est absente.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M1** — FizzBuzz kinois | **4** | 🟡 Règles non respectées | 3/3 | 3 | ✅ | Le FizzBuzz est juste, mais respecte les consignes : boucle for, %, === et explication de l'ordre en commentaire.<br>• Explique en commentaire pourquoi l'ordre de tes conditions est important.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **4** | 🟡 Règles non respectées | 11/11 | 3 | ✅ | `estRempli` donne les bons résultats, mais elle doit être fléchée, utiliser un ternaire et aucune comparaison.<br>• Note tes prédictions en commentaire avant de tester.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M4** — Le score par défaut : \|\| contre ?? | **5** | ✅ Parfait | 5/5 | 3 | ✅ | Parfait ! Le piège de `0 \|\| 'aucun'` est expliqué et corrigé à bon escient avec `??`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M5** — La vitre teintée (portée de bloc) | **1** | ❌ Erreur d'exécution | — | 3 | ✅ | Le programme s'arrête encore sur une erreur : une variable déclarée avec const dans un bloc { } n'existe pas en dehors. Une ReferenceError stoppe tout le script, c'est pour ça que afficher() ne s'exécutait jamais.<br>• SyntaxError: Identifier 'ville' has already been declared (ligne 62)<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M6** — Le détective du return | **1** | ❌ Erreur d'exécution | — | 3 | ✅ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• SyntaxError: Unexpected token (ligne 2)<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 3 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 3 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A2** — Le moteur de paie v2 | **2** | 🟠 Résultat incorrect | 3/7 | 3 | ✅ | Un résultat est faux : seules les heures AU-DELÀ de 40 sont payées × 1,5 (40 × 2500 + 8 × 3750 = 130000) ; le jour le plus chargé est mercredi.<br>• `calculerSalaire(48)` renvoie TypeError: heures.forEach is not a function au lieu de 130000.<br>• `calculerSalaire(40)` renvoie TypeError: heures.forEach is not a function au lieu de 100000.<br>• `calculerSalaire(30)` renvoie TypeError: heures.forEach is not a function au lieu de 75000.<br>• `calculerSalaire(48, 1000)` renvoie TypeError: heures.forEach is not a function au lieu de 52000.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A3** — L'inventaire en console | **3** | 🟠 Résultat incorrect | 6/7 | 3 | ✅ | Un résultat est faux ou introuvable : stocke chaque résultat (filter, map) dans une variable ou affiche-le, et gère le cas undefined de .find() avec « Produit introuvable ».<br>• Affiche le nombre de produits en rupture de stock (2).<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A4** — Le classement de la promo | **3** | 🟠 Résultat incorrect | 6/9 | 3 | ✅ | Un résultat est faux : arrondis la moyenne à une décimale en gardant un nombre (Math.round(x * 10) / 10), et vérifie les seuils 16 et 10 (>=).<br>• Affiche le nombre d'admis (4).<br>• Affiche le premier « Excellent » trouvé avec .find() (Bijou).<br>• Affiche le bulletin avec `console.table()`.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A5** — Le nombre mystère | **2** | 🟠 Résultat incorrect | 1/4 | 3 | ✅ | Le jeu ne se comporte pas comme attendu : indices plus grand / plus petit, compteur qui ignore les saisies invalides, arrêt après 7 essais et révélation du nombre.<br>• Avec les saisies abc, 50, 25, 43 on attend « trouvé en 3 essais ! » (abc n'est pas compté).<br>• Après 7 mauvais essais, le jeu doit s'arrêter (11 prompt() appelés) et révéler le nombre (43).<br>• 7 « abc » puis 43 doit donner « trouvé en 1 essai » : une saisie invalide ne compte pas.<br>• `let` jamais réassigné : `essaisRestants`, `nombreEssaisTotal` → utilise `const`.<br>📚 Recherche complète, testée et sourcée (MDN). |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (79 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Avancé (97 %) | **3** | Conditions ordonnées du cas le plus restrictif au plus général (FizzBuzz, DAB) et cas limites testés (0, négatif, plafond). ?? utilisé à bon escient.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Compétent : Satisfaisant (68 %) | **2** | Les fonctions renvoient leur résultat avec return (pas de console.log à l'intérieur) et sont appelées avec les bons arguments. Portée de bloc respectée : aucune ReferenceError.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (85 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Avancé (95 %) | **3** | RECHERCHES.md complet, testé et sourcé (MDN). Commits réguliers et explicites (un par exercice).<br>_Recherches 100 % · commits par exercice 100 % · règles de code 79 %_ |
| **Total** | | **12 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
