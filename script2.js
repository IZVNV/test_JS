function factorielle(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}

var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

var nombreEntier = parseInt(nombre);

var resultat = factorielle(nombreEntier);

console.log("Le résultat est : " + resultat);
