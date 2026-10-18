// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M7 — La tirelire numérique (Niveau 2 — Moyen)

Objectif : utiliser une boucle for avec un accumulateur et une condition à l'intérieur.
Contexte : Patience épargne 2 000 FC par semaine ; toutes les 4 semaines, sa tante ajoute un bonus de 1 000 FC.

Consignes :
1. Simule 12 semaines avec une boucle.
2. À chaque tour, affiche : Semaine 4 : 9000 FC (bonus !).
3. Affiche le total final.

Résultat attendu :
Total après 12 semaines : 27000 FC

Recherche (à rédiger dans RECHERCHES.md) :
Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

let total = 0;

for (let i = 1; i <= 12; i++) {
    let versement = 2000;

    if (i % 4 === 0) {
        versement += 1000;
        total += versement;
        console.log(`Semaine ${i} : ${total} FC (bonus !)`);
    } else {
        total += versement;
        console.log(`Semaine ${i} : ${total} FC`);
    }
}

console.log(`Total après 12 semaines : ${total} FC`);



