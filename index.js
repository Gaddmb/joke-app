// avant de commencer avec une API et de prendre le liens et de le tester dans le browser ensuite le tester comme ci-dessous

const header = document.getElementById("header");
const content = document.getElementById("content");
console.log(header, content);

// créee une function pour la blague
const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues") // Envoie une requête à l'API pour obtenir une blague
    .then((res) => res.json()) // Convertit la réponse en JSON une fois reçue
    .then((data) => {
      console.log(data); // Affiche l'intégralité des données de l'API dans la console
      const contentJoke = data.data.content; // Stocke le contenu de la blague dans une variable

      // Met à jour l'élément header avec le titre de la blague
      header.textContent = contentJoke.text_head;

      // Met à jour l'élément content avec le texte de la blague si disponible,
      // sinon affiche le texte caché de la blague
      content.textContent = contentJoke.text
        ? contentJoke.text !== "" // Si le texte de la blague n'est pas vide
        : contentJoke.text_hidden; // Sinon, affiche le texte caché
    });
};
getJoke(); // Appelle la fonction pour récupérer et afficher une blague
//even click pour changer de blague
document.body.addEventListener("click", getJoke);
