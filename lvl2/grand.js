//Exercice 1: Écrivez un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.
//Résultat attendu dans la console :
//[12 , 54 , 32 ] --> 54

const prompt = require("prompt-sync")();

const inputpremier = prompt("Donne moi une premiere valeur ? "); // Demande la premiere valeur
const inputsecond = prompt("Donne moi une deuxième valeur ? "); // Demande la seconde valeur
const inputthird= prompt("Donne moi une troisième valeur ? "); // Demande la troisième valeur

console.log(`${inputpremier}, ${inputsecond}, ${inputthird} =>`, Math.max(inputpremier, inputsecond, inputthird));
