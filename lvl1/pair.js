//Exercice 6
//Écrire un programme qui demande à l'utilisateur de saisir un nombre et qui affiche si ce nombre est pair ou impair.

const prompt = require("prompt-sync")();

const nombre = prompt("Donne moi un nombre ? "); // Demande un nombre

if (nombre % 2 == 0) {
  console.log("Nombre Pair"); //Si le nombre donner est pari affichera Nombre Pair
} else {
  console.log("Nombre Impair"); //Si le nombre donner est impair affichera Nombre Impair
};
