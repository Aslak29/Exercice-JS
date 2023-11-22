// Exercice 9 : Somme du tableau
// Écrire une fonction qui prend un tableau d'entiers en paramètre et renvoie la somme de tous les éléments du tableau.

  const exTab= [1, 2, 3, 4, 5]; // tableau avec les éléments
  const result = sommeTab(exTab); // resultat des éléments

function sommeTab(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }

    return somme;
  }

  console.log("La somme des éléments du tableau est : " + result); // affichera la somme des éléments du tableau