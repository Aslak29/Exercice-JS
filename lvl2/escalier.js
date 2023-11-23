// Exercice 4: Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.
// Résultat attendu dans le terminal pour le chiffre 5 :
// *​
// **​
// ***​
// ****​
// *****

function escalier(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
        //Conditions pour permettre d'afficher les étoiles et les espaces
      if (j <= i) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}

escalier(5); //stop la boucle a 5
