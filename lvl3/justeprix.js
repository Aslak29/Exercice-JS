// Exercice 2: Demandez à l'utilisateur de saisir un nombre de tentative (ce nombre de tentatives représentera le nombre d'échec possible)​. Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.​ Construisez le programme permettant de :​
// Saisir un nombre​
// Comparer le nombre avec le résultat attendu "N"​
// Afficher "Plus" ou "Moins"​
// Retirer une vie

const prompt = require("prompt");

function justePrix() {
  // Initialize the prompt
  prompt.start();

  // Demande le nombre de tentatives
  prompt.get(["nombreDeTentatives"], function (err, result) {
    const nombreDeTentatives = parseInt(result.nombreDeTentatives);
    const nombreAttendu = Math.floor(Math.random() * (nombreDeTentatives + 1));

    // Fonction qui gère le déroulement du jeu
    function number(i) {
      if (i <= nombreDeTentatives) {
        prompt.get(["proposition"], function (err, result) {
          const proposition = parseInt(result.proposition);

          if (proposition === nombreAttendu) {
            console.log("Félicitations ! Vous avez trouvé le juste prix !");
            prompt.stop();
          } else if (proposition < nombreAttendu) {
            console.log("Plus");
          } else {
            console.log("Moins");
          }

          if (proposition !== nombreAttendu) {
            console.log(`Il vous reste ${nombreDeTentatives - i} tentatives.`);
            number(i + 1);
          }
        });
      } else {
        console.log(
          `Désolé, vous avez épuisé toutes vos tentatives. Le juste prix était : ${nombreAttendu}`
        );
        prompt.stop();
      }
    }

    // Démarre le jeu
    number(1);
  });
}

justePrix();
