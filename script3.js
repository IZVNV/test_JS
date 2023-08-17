var nombreEtages = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);

var nombreEntier = parseInt(nombreEtages);

for (var i = 1; i <= nombreEntier; i++) {
  var ligne = "";

  for (var j = 1; j <= nombreEntier - i; j++) {
    ligne += " ";
  }

  for (var k = 1; k <= i; k++) {
    ligne += "#";
  }
  console.log(ligne);
}
