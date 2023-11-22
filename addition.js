//Exercice 3 Addition
//Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.
//Résultat attendu dans le terminal : 13 + 3 = 15

const prompt = require("prompt-sync")();

const inputpremier = prompt("Donne moi une premiere valeur ? "); // Demande la premiere valeur
const inputsecond = prompt("Donne moi une deuxième valeur ? "); // Demande la seconde valeur

const result = parseFloat(inputpremier) + parseFloat(inputsecond); //Calcul la premiere et la seconde valeur

console.log(`${inputpremier} + ${inputsecond} = ${result}`); // affichera la premiere valeur + la seconde valeur = le résultat
