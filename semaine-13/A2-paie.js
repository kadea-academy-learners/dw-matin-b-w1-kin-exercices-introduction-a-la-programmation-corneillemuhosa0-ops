// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A2 — Le moteur de paie v2 (Niveau 3 — Avancé)

Objectif : parcourir un tableau avec .forEach(), accumuler un total et appliquer une règle d'heures supplémentaires.
Contexte : Kadea Tech paie ses techniciens 2 500 FC de l'heure ; au-delà de 40 h par semaine, chaque heure est payée 1,5 fois.

Consignes :
1. Pars de const heuresSemaine = [8, 9, 10, 8, 7, 6]; (du lundi au samedi).
2. Calcule le total des heures avec .forEach() et un accumulateur.
3. Écris calculerSalaire(heures, tauxHoraire = 2500) qui gère les heures supplémentaires.
4. Avec une boucle for, trouve le jour le plus chargé.

Résultat attendu :
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).

Recherche (à rédiger dans RECHERCHES.md) :
La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const heuresSemaine = [8, 9, 10, 8, 7, 6];
const joursSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

// 2. Calcul du total des heures avec .forEach() et un accumulateur
let totalHeures = 0;
heuresSemaine.forEach((heures) => {
    totalHeures += heures;
});

// 3. Fonction calculerSalaire gérant les heures supplémentaires
const calculerSalaire = (heures, tauxHoraire = 2500) => {
    let sommeHeures = 0;
    heures.forEach((h) => {
        sommeHeures += h;
    });

    let salaireTotal = 0;
    if (sommeHeures > 40) {
        const heuresNormales = 40;
        const heuresSup = sommeHeures - 40;
        salaireTotal = (heuresNormales * tauxHoraire) + (heuresSup * tauxHoraire * 1.5);
    } else {
        salaireTotal = sommeHeures * tauxHoraire;
    }

    return `Total : ${sommeHeures} h – Salaire : ${salaireTotal} FC`;
};

// 4. Boucle for pour trouver le jour le plus chargé
let maxHeures = heuresSemaine[0];
let indexMax = 0;

for (let i = 1; i < heuresSemaine.length; i++) {
    if (heuresSemaine[i] > maxHeures) {
        maxHeures = heuresSemaine[i];
        indexMax = i;
    }
}

const jourPlusCharge = joursSemaine[indexMax];

console.log(`${calculerSalaire(heuresSemaine)} ; jour le plus chargé : ${jourPlusCharge} (${maxHeures} h).`);

