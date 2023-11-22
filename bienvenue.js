//Exercice 1 Écrivez un programme qui demande à l'utilisateur de saisir son nom et de lui afficher son nom avec le message de bienvenue.
//Résultat attendu dans le terminal : Bienvenue Julien !

const prompt = require("prompt-sync")();

const input = prompt("Quel est ton prénom ?"); // Demande le prénom de l'utilisateur

console.log(`Bienvenue ${input} !`); // Affichera Bienvenue (Prénom choisi) ! dans le terminal
