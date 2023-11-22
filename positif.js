//Exercice 7
//Écrire un programme qui demande un nombre à l'utilisateur puis vérifie si ce nombre est positif, négatif ou nul.

const prompt = require("prompt-sync")();

const nombre = prompt("Donne moi un nombre ? "); // Demande un nombre

if (nombre > 0) {
  console.log("Nombre Positif"); //Si le nombre donner est Positif affichera Nombre Positif
} else if (nombre < 0) {
  console.log("Nombre Negatif"); //Si le nombre donner est Néfatif affichera Nombre Négatif
} else {
  console.log("Nombre Nul"); //Si le nombre donner est Nul affichera Nombre Nul
}
