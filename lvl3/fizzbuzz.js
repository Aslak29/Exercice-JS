// Exercie 1 : Demandez à l'utilisateur de saisir un nombre "N". Afficher tous les nombres allant de 0 à "N", avec les particularités suivantes :

// Remplacez tous les multiples de 3 par "FIZZ"​
// Remplacez tous les multiples de 5 par "BUZZ"​
// Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"
// FIZZBUZZ​
// 1​
// 2​
// FIZZ​
// 4​
// BUZZ​
// FIZZ


const prompt = require("prompt-sync")();
const nombre = prompt("Donne moi un nombre "); //demande un nombre a l'utilisateur
const fizz = fizzBuzz(nombre);

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(i);
    }
  }
};
