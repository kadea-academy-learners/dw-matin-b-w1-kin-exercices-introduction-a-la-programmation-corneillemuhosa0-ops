# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Dans la toute première version de JavaScript (en 1995), les valeurs étaient stockées sur des descripteurs de 32 bits, dont les premiers bits indiquaient le type de données. Les objets possédaient le tag binaire `000`. Comme la valeur `null` était représentée par une suite de zéros en mémoire (`0x00`), le moteur l'a interprétée à tort comme un objet. Cette anomalie historique a été conservée par la suite pour des raisons de rétrocompatibilité.


...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(typeof null);      // Affiche : "object"
console.log(typeof undefined); // Affiche : "undefined"
console.log(null === null);    // Affiche : true

**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof#null

**IA utilisée ? (prompt + vérification sur MDN) :** non
Oui, prompt : "Pourquoi typeof null retourne object en JavaScript", vérifié et validé sur MDN Web Docs.

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
`NaN` signifie "Not-a-Number" (pas un nombre) et représente une valeur numérique invalide ou le résultat d'une opération mathématique impossible. L'expression `NaN === NaN` renvoie `false` par définition dans la norme IEEE 754, car chaque `NaN` représente une erreur différente et aucune valeur invalide n'est égale à une autre. Pour détecter correctement un `NaN`, il faut utiliser la fonction globale `Number.isNaN()` ou `isNaN()`.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(NaN === NaN);       // Affiche : false
console.log(Number.isNaN(NaN)); // Affiche : true
console.log(Number.isNaN("abc")); // Affiche : false (car "abc" n'est pas converti implicitement)


**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN

**IA utilisée ? (prompt + vérification sur MDN) :** non
Oui, prompt : "Pourquoi NaN === NaN est faux en JavaScript et comment le détecter", vérifié et validé sur MDN Web Docs.

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, l'opérateur modulo (`%`) conserve le signe du dividende. Par conséquent, l'opération `-7 % 2` renvoie `-1` et non `1`. Si l'on teste la condition avec `=== 1`, les nombres impairs négatifs échoueront. En utilisant plutôt `!== 0`, on s'assure de détecter correctement tous les nombres impairs, qu'ils soient positifs ou négatifs.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(-7 % 2);          // Affiche : -1
console.log(-7 % 2 === 1);    // Affiche : false
console.log(-7 % 2 !== 0);    // Affiche : true


**Source :** 

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder

**IA utilisée ? (prompt + vérification sur MDN) :** non
Oui, prompt : "Que renvoie -7 % 2 en JavaScript et pourquoi utiliser !== 0 pour les impairs", vérifié et validé sur MDN Web Docs.

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Oui, il est techniquement possible d'enchaîner ou d'imbriquer plusieurs opérateurs ternaires. Cependant, c'est fortement déconseillé car cela détériore rapidement la lisibilité du code (souvent comparé à du code illisible ou "code spaghetti"). Pour des conditions multiples, il est préférable d'utiliser des structures `if / else if / else` ou un bloc `switch` qui sont beaucoup plus clairs et faciles à maintenir.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const note = 14;
const mention = note >= 16 ? "Très bien" : note >= 12 ? "Bien" : note >= 10 ? "Passable" : "Échec";
console.log(mention); // Affiche : Bien



**Source :** 

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator


**IA utilisée ? (prompt + vérification sur MDN) :** non

Oui, prompt : "Enchaîner plusieurs ternaires en JavaScript et bonnes pratiques", vérifié et validé sur MDN Web Docs.

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Et bien parce que javaScript utilise la norme IEEE 754 pour stocker les nombres décimaux en binaire (sur 64 bits). Dans ce format, des nombres simples comme 0.1 ou 0.2 deviennent des fractions binaires infinies, ce qui génère une infime erreur d'arrondi (`0.30000000000000004`). Par ailleurs, la méthode `.toFixed()` transforme le nombre en chaîne de caractères (`string`), ce qui fausse les calculs ultérieurs si l'on tente de faire des opérations mathématiques directes avec.

...

**Mon test dans la console :**

console.log(0.1 + 0.2); // Affiche : 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // Affiche : "0.30" (string)
console.log(5 + "0.30"); // Affiche : "50.30" (concaténation au lieu d'une addition)


**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#type_nombre

**IA utilisée ? (prompt + vérification sur MDN) :** non

Oui, prompt : "Pourquoi 0.1 + 0.2 ne fait pas 0.3 en JS et piège toFixed", vérifié et validé sur MDN Web Docs.


## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Et bien la méthode `.reduce()` permet de réduire les éléments d'un tableau à une seule valeur unique en appliquant une fonction de rappel (callback) munie d'un accumulateur. Elle parcourt le tableau du début à la fin en mémorisant le résultat intermédiaire à chaque étape. C'est l'outil idéal pour sommer des valeurs sans avoir à déclarer une variable d'accumulation externe au préalable.

...

**Mon test dans la console :**

const heuresSemaine = [8, 9, 10, 8, 7, 6];
const totalHeuresReduce = heuresSemaine.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
console.log(totalHeuresReduce); // Affiche : 48


**Source :** 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** non
Oui, prompt : "Expliquer Array.prototype.reduce() en JavaScript et donner un exemple de sommation", vérifié et validé sur MDN Web Docs.

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Pour restreindre l'affichage de `console.table()` aux colonnes spécifiques, on lui passe un second argument sous forme de tableau de chaînes de caractères contenant le nom des clés souhaitées : `console.table(inventaire, ["nom", "stock"])`.

En ce qui concerne la recherche : lorsque aucun élément ne satisfait la condition, `.find()` renvoie la valeur `undefined`, tandis que `.filter()` renvoie toujours un nouveau tableau vide `[]`.
...

**Mon test dans la console :**

const stock = [{ nom: "Clé USB", stock: 10 }, { nom: "Souris", stock: 0 }];
console.table(stock, ["nom", "stock"]);
console.log(stock.find(p => p.nom === "Ecran")); // Affiche : undefined
console.log(stock.filter(p => p.nom === "Ecran")); // Affiche : []


**Source :** 
https://developer.mozilla.org/fr/docs/Web/API/console/table


**IA utilisée ? (prompt + vérification sur MDN) :** non

Oui, prompt : "Filtrer colonnes console table JS et retour de find et filter si introuvable", vérifié et validé sur MDN Web Docs.

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Pour trier le bulletin par ordre décroissant des moyennes, on utilise la méthode `.sort((a, b) => b.moyenne - a.moyenne)`. La méthode `.sort()` modifie directement (par effet de bord) le tableau d'origine en réorganisant ses éléments en place. Pour éviter cette mutation, on peut créer une copie superficielle du tableau avant de le trier, par exemple en utilisant l'opérateur de décomposition `[...]`.

...

**Mon test dans la console :**

const notes = [{ moyenne: 12 }, { moyenne: 17 }, { moyenne: 15 }];
const trie = [...notes].sort((a, b) => b.moyenne - a.moyenne);
console.log(trie); // Affiche le tableau trié par ordre décroissant
console.log(notes); // Le tableau d'origine reste inchangé



**Source :** 

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

**IA utilisée ? (prompt + vérification sur MDN) :** non

Oui, prompt : "Trier un tableau d'objets avec sort en JS et éviter la mutation", vérifié et validé sur MDN Web Docs.


## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
La recherche dichotomique est un algorithme qui consiste à diviser par deux l'intervalle de recherche à chaque tentative. Pour un intervalle de 100 nombres, chaque choix élimine la moitié des options restantes ($100 \rightarrow 50 \rightarrow 25 \rightarrow 12 \rightarrow 6 \rightarrow 3 \rightarrow 1$). Comme $2^7 = 128$, cela signifie qu'en 7 essais maximum, on dispose de suffisamment de divisions pour cibler précisément n'importe quel nombre entre 1 et 100.




...

**Mon test dans la console :**
let min = 1;
let max = 100;
let cible = 42;
let essais = 0;
while (min <= max) {
    essais++;
    let milieu = Math.floor((min + max) / 2);
    if (milieu === cible) { console.log(`Trouvé en ${essais} essais`); break; }
    else if (milieu < cible) { min = milieu + 1; }
    else { max = milieu - 1; }
}



**Source :** 

https://developer.mozilla.org/fr/docs/Web/JavaScript


**IA utilisée ? (prompt + vérification sur MDN) :** non

Oui, prompt : "Expliquer la recherche dichotomique et pourquoi 7 essais suffisent pour 100 en informatique", vérifié et validé sur MDN Web Docs.
