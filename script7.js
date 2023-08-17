var userPhrase = prompt("Parle au bot :");

var botResponse;

if (userPhrase.trim() === "") {
  botResponse = "t'es en PLS ?";
} else if (userPhrase === userPhrase.toUpperCase()) {
  botResponse = "Pwa, calme-toi...";
} else if (userPhrase.endsWith("?")) {
  botResponse = "Ouais Ouais...";
} else if (userPhrase.includes("Fortnite")) {
  botResponse = "on s' fait une partie soum-soum ?";
} else {
  botResponse = "balek.";
}

console.log(botResponse);
