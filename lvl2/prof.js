//Exercice 2 :Écrivez un programme pour un professeur flemmard.​ Vous disposez d'une liste de notes comprises entre 0 et 20​. Écrivez un commentaire pour chacune de ces copies d'élève.
// 0-4 --> "Catastrophique, il faut tout revoir"​
// 5-10 --> "Insuffisant"​
// 11-14 --> "Peut mieux faire"​
// 15-17 --> "Bien"​
// 18-20 --> "Excellent, bon travail"

const prompt = require("prompt-sync")();
const note = prompt("Donne moi la note de l'élève "); // Demande la note de l'élève

if (note != "" && !isNaN(note)) {
  if (note <= 4) {
    console.log("Catastrophique, il faut tout revoir"); //affichera Catastrophique, il faut tout revoir si la note est entre 0 et 4
  } else if (note >= 5 && note <= 10) {
    console.log("Insuffisant"); //affichera Insuffisant si la note est entre 5 et 10
  } else if (note >= 11 && note <= 14) {
    console.log("Peut mieux faire"); //affichera Peut mieux faire si la note est entre 11 et 14
  } else if (note >= 15 && note <= 17) {
    console.log("Bien"); //affichera Bien si la note est entre 15 et 17
  } else if (note >=18 && note <= 20){
    console.log("Excellent, bon travail");//affichera Excellent, bon travail si la note est entre 18 et 20
  }else {
    console.log("erreur mettre une notre entre 0 et 20");
  }
};
