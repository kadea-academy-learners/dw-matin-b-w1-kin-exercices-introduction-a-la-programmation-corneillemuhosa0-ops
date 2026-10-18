// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M5 — La vitre teintée (portée de bloc) (Niveau 2 — Moyen)

Objectif : prédire où une variable existe et corriger une ReferenceError.

Consignes :
1. Le code ci-dessous est déjà recopié dans la zone de travail : écris tes prédictions en commentaire avant de l'exécuter.
2. Exécute-le : pourquoi la fonction afficher ne s'exécute-t-elle jamais ?
3. Corrige le code pour que tout s'affiche sans erreur, sans déplacer les déclarations dans les blocs.

Code fourni :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);

Résultat attendu :
avant correction : Kinshasa puis ReferenceError: commune is not defined.
après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Mes prédictions (avant d'exécuter) :
//

const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe'; // - console.log(commune) en dehors du if va lever une ReferenceError car commune a une portée de bloc.

  console.log(ville); // - console.log(ville) à l'intérieur du if fonctionnera (accès à la portée globale).

}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());  // - La fonction afficher() ne s'exécutera pas car le script plantera à l'étape précédente (ReferenceError).

console.log(secret);



let commune; // Déclaration globale pour stocker la valeur du bloc

const ville = 'Kinshasa';
if (true) {
    commune = 'Gombe'; // Assignation de la valeur dans le bloc
    console.log(ville); // Affiche : Kinshasa
}
console.log(commune); // Affiche : Gombe (plus d'erreur !)

const afficher = () => {
    const secret = 'pondu';
    return secret;
};

console.log(afficher()); // Affiche : pondu

// La variable 'secret' est confinée dans la fonction afficher(). 
// Pour l'afficher sans déplacer sa déclaration, on utilise le retour de la fonction :
console.log(afficher()); // Affiche : pondu (remplace le console.log(secret) qui provoquait une erreur)
