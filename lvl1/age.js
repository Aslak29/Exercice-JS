//Exercice 4 Écrivez un programme qui demande d'entrer l'âge d'un enfant et qui vérifie dans quel catégorie il est :
//- 12 ans ou plus = Cadet
//- 10 ans ou plus = Minime
//- 8 ans ou plus = Pupille
//- Autre = Poussin

const prompt = require("prompt-sync")();
const age = prompt("Donne moi l'âge de l'enfant "); // Demande l'âge de l'enfant

if (age != "" && !isNaN(age)) {
  if (age <= 6) {
    console.log("L'enfant appartient  à la categorie 'Poussin' "); //affichera la catégorie Poussin si l'âge et inférieur ou égale a 6
  } else if (age >= 8 && age <= 9) {
    console.log("L'enfant appartient  à la categorie  'Pupille'"); //affichera la catégorie Pupille si l'âge et supérieur ou égale a 8
  } else if (age >= 10 && age <= 11) {
    console.log("L'enfant appartient  à la categorie  'Minime'"); //affichera la catégorie Minime si l'âge et supérieur ou égale a 10
  } else if (age >= 12) {
    console.log("L'enfant appartient  à la categorie 'Cadet'"); //affichera la catégorie Cadet si l'âge et supérieur ou égale a 12
  } else {
  }
}
