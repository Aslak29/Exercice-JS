// Exercice 5 : Adaptez l'exercice 4 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide.
// Résultat attendu dans le terminal pour le chiffre 5 :
// *               ​
// **​
// ***​
// ****​
// *****
// *****​
// ****​
// ***​
// **​
// *
function escalier(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      //Conditions pour permettre d'afficher les étoiles et les espaces
      if (j >= n - i - 1) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}

escalier(5); //stop la boucle a 5
