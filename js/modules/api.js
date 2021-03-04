export { findHero }; // Exportera funktion
import { createCard, userMsg } from "./content.js";

const privateKey = "b007589db8518dcbb941ed7bdef21b3840498b0a";
const publicKey = "b52df188d35ef1bbeef3878e0342661c";

function findHero(query) {
  // Funktion för att hämta hjälte med information och bild.

  const website = "https://gateway.marvel.com/v1/public/characters"; // Gateway för att kunna hämta karaktär ifrån API

  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  const url = website;
  $.getJSON(url, {
    //JSON query.
    ts: ts,
    apikey: publicKey,
    hash: hash,
    name: query,
  })
    .done(function (response) {
      console.log(response);
      if (response.data.results[0] != null) {
        // Om input inte är lika med 0 / " " så skriv ut resultat.
        console.log("WE HAVE A RESULT!!!");
        createCard(response);
      } else {
        // Annars göm bild och text och skriv ut ett meddelande att hjälten inte finns
        userMsg("Hero not found, try again!");
      }
    })
    .fail(function (err) {
      // error kod som finns loggade på utvecklarens hemsidan för API:N
      console.log(err);
    });
}
