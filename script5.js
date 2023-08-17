const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

const allBooksRentedOnce = books.every((book) => book.rented > 0);
console.log(
  `Est-ce que tous les livres ont été au moins empruntés une fois ? ${
    allBooksRentedOnce ? "Oui" : "Non"
  }`
);

const mostRentedBook = books.reduce((max, book) =>
  book.rented > max.rented ? book : max
);
console.log(`Quel est livre le plus emprunté ? ${mostRentedBook.title}`);

const leastRentedBook = books.reduce((min, book) =>
  book.rented < min.rented ? book : min
);
console.log(`Quel est le livre le moins emprunté ? ${leastRentedBook.title}`);

const bookWithId873495 = books.find((book) => book.id === 873495);
console.log(`Trouve le livre avec l'ID: 873495 : ${bookWithId873495.title}`);

const bookIndexToDelete = books.findIndex((book) => book.id === 133712);
if (bookIndexToDelete !== -1) {
  books.splice(bookIndexToDelete, 1);
  console.log(`Livre avec l'ID: 133712 supprimé.`);
} else {
  console.log(`Livre avec l'ID: 133712 non trouvé.`);
}

const sortedBooks = books
  .filter((book) => book.id !== 133712)
  .sort((a, b) => a.title.localeCompare(b.title));
console.log(`Trie les livres par ordre alphabétique :`, sortedBooks);
