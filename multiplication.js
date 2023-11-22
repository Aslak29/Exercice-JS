//Exercice 8 : Table de multiplication
//Écrivez un programme JS qui prend un nombre en entrée et affiche sa table de multiplication jusqu’à 10.
//Résultat attendu dans le terminal pour la table de 5 :
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

const prompt = require("prompt-sync")();

const nombre = prompt("Donne moi un nombre ? "); // Demande un nombre

for (let i = 1; i <= 10; i++) {
  const result = i * nombre; // multiplie le nombre donné de jusqu'a 10 

  console.log(`${nombre} x ${i} = ${result}`); //Affiche le nombre donné, sa multiplication et son résultat
}
