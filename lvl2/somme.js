//Exercice 3 :Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".​Calculer la somme de tous les nombres entre 1 et N.
//Résultat attendu dans le terminal pour le chiffre 5 :
//1+2+3+4+5 = 15

const prompt = require("prompt-sync")();
const nombre = prompt("Donne moi un nombre " ); // Demande un nombre a l'utilisateur
const ndonne = parseInt(nombre) // recupère le nombre de l'utilisateur
const result = nombreDonne(ndonne) //permet de calculer et de donner le résultat

function nombreDonne(ndonne){
   let somme = 0 
    
    for (let i = 0; i <= ndonne ; i++ ){
        somme += i;
    }

    return somme;
}

console.log("La somme des éléments du tableau est : " + result); //affichera le résultat