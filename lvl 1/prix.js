//Exercice 5
//Écrivez un programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit et vérifiez-en le profit ou la perte.
//Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.

const prompt = require("prompt-sync")();
const prixfab = prompt("Donne moi le prix de fabrication "); // Demande le prix de fabrication
const prixvente = prompt("Donne moi le prix de vente "); // Demande le prix de vente

if (prixfab < prixvente) {
  console.log("C'est un profit"); // si le prixfab est inférieur au prix vente alors il affichera que c'est un profit
} else if (prixfab > prixvente) {
  console.log("C'est une perte"); // si le prixfab est supérieur au prix vente alors il affichera que c'est une perte
} else {
    console.log("C'est égale"); // Si le prixfab est égale au prix de vente alors il affichere que c'est égale
};
