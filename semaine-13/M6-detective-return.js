------// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const doubler = (n) => { n * 2; };  // Bug : Présence d'accolades `{}` sans le mot-clé `return`, ce qui provoque un retour implicite de `undefined`.  // Bug : Présence d'accolades `{}` sans le mot-clé `return`, ce qui provoque un retour implicite de `undefined`.
console.log(doubler(4));           // undefined ?!


const calculerTva = (prix) => { console.log(prix * 0.16); }; // Bug : La fonction affichait le résultat via `console.log` au lieu de le retourner. 

const total = calculerTva(1000) + 500; // Par conséquent, `calculerTva(1000)` valait `undefined`, et `undefined + 500` a donné `NaN`. // Correction : Utiliser `return` dans la fonction et appliquer le calcul en dehors.
const calculerTva = (prix) => prix * 0.16;
const total = calculerTva(1000) + 500;
console.log(total); // Affiche : 660


console.log(total);                // NaN ?! 

const saluer = (prenom) => { // Bug : L'insertion automatique de point-virgule (ASI) insère un point-virgule juste après `return` 

// Correction : Remonter le gabarit littéral sur la même ligne que `return`.
const saluer = (prenom) => {
    return `Mbote ${prenom}`;
};
console.log(saluer('Ney')); // Affiche : Mbote Ney

  return
    `Mbote ${prenom}`;
};
console.log(saluer('Ney'));        // undefined ?!


const doubler = (n) => n * 2;
console.log(doubler(4));

const calculerTva = (prix) => prix * 0.16;
const total = calculerTva(1000) + 500;
console.log(total);

const saluer = (prenom) => {
    return `Mbote ${prenom}`;
};
console.log(saluer('Ney'));


