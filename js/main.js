"use strict";
/* Skickar och hämtar det vi behöver till och från andra filer */
export { query };
import { findHero } from "./modules/api.js";

let query;
const searchButton = document.querySelector("#button");
const searchBox = document.querySelector(".searchbar");

/* Kollar om det finnas några tidigare sökningar */
checkCookie();

searchBox.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.keyCode == 13) {
    searchButton.click();
  }
});

searchButton.addEventListener("click", executeSearch);

/* Sökfunktion */
function executeSearch() {
  const card = document.querySelectorAll(".card");
  if (card.length != 0) {
    clearSearch(card);
  }
  query = searchBox.value;
  // testFunction(); // För att testa moduler
  if (query != null && query != "") {
    setCookie("Recently searched", query, 30);
    findHero(query);
  } else {
    alert("You can't leave the box empty!");
  }
}

/* Skapa innehåll till sökresultat. Se content.js */

/* Funktion för att radera sökresultat */
// Raderar det som sätts i parametern
function clearSearch(clear) {
  for (let i = 0; i < clear.length; i++) {
    clear[i].remove();
  }
}

/* Funktion för att spara via kakor */
// Kaktest
function setCookie(cName, cValue, cExpire) {
  const date = new Date();
  date.setTime(date.getTime() + cExpire * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${cName}=${cValue};${expires};path=/`;
}

function getCookie(cName) {
  let ca = document.cookie.split(";");
  let searchedWords = [];
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].split(
      "="
    ); /*
        searchedWords[(c[0]+'').trim()] = unescape(c.slice(1).join('='));
        */
    if (cName == c[0].trim()) {
      searchedWords[i] = decodeURIComponent(c[1]);
    }
  }
  return searchedWords;
}

function checkCookie() {
  let query = getCookie("Recently searched"); // hämtar senaste sökordet
  let searchInput = document.querySelector(".searched");

  if (query != "") {
    for (let i = 0; i < query.length; i++) {
      let element = query[i];

      searchInput.innerHTML = `${element} <br>`;
    }
  } else {
    searchInput.innerText = "You havn't searched anything yet";
  }
}
