// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M4 — Le score par défaut : || contre ?? (Niveau 2 — Moyen)

Objectif : utiliser le court-circuit pour donner une valeur par défaut, et éviter son piège.
Contexte : l'application du quiz Canvas affiche « aucun » quand un apprenant n'a pas encore de score.

Consignes :
1. Écris une fonction fléchée afficherScore(score) qui renvoie le texte « Score : » suivi de score || 'aucun', avec un gabarit littéral.
2. Teste avec 15, 0 et undefined. Explique le bug du cas 0.
3. Corrige le bug avec l'opérateur ??.
4. Bonus : écris estConnecte && console.log('Bienvenue !') et explique quand le message s'affiche.

Astuce : la version corrigée doit s'appeler afficherScore (renomme l'ancienne, ex. afficherScoreBug).

Résultat attendu :
avant correction : 15, aucun, aucun ; après correction : 15, 0, aucun.

Recherche (à rédiger dans RECHERCHES.md) :
Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const afficherScoreBug = (score) => `Score : ${score || "aucun"}`;

console.log("--- Tests avec afficherScoreBug (||) ---");
console.log(afficherScoreBug(15));        // Score : 15
console.log(afficherScoreBug(0));         // Score : aucun (Bug : 0 est falsy, donc remplacé à tort)
console.log(afficherScoreBug(undefined)); // Score : aucun
const afficherScore = (score) => `Score : ${score ?? "aucun"}`;
console.log("--- Tests avec afficherScore (??) ---");
console.log(afficherScore(15));           // Score : 15
console.log(afficherScore(0));            // Score : 0 (Corrigé : 0 est préservé)
console.log(afficherScore(undefined));    // Score : aucun
const estConnecte = true;
estConnecte && console.log("Bienvenue !");

