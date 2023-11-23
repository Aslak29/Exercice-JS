// Exercice 6: Adaptez l'exercice 5 pour que la pyramide soit dans le bon sens (^).
// Résultat attendu dans le terminal pour le chiffre 5 :
//     *
//    ***​
//   *****​
//  *******​
// *********
function pyramide(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < rows - i; j++) str += " "; //Ajoute un espace
    for (let k = 0; k <= i; k++) str += "* "; //Ajoute une étoile
    console.log(str);
  }
}

pyramide(5); //stop la boucle a 5
