"use strict";
export { searchTerm };
import { testFunction } from './modules/api.js';
import { createHeroCard } from './modules/content.js';

let searchTerm;
const searchButton = document.querySelector('#button');
const searchBox = document.querySelector('.searchbar');

searchBox.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        searchButton.click();
    }
});

searchButton.addEventListener('click', executeSearch);

/* Sökfunktion */
function executeSearch() {
    let card = document.querySelectorAll('.card');
    clearSearch(card);
    searchTerm = searchBox.value;
    testFunction();
    if (searchTerm != null && searchTerm != "") {
        //fetchApi(comicUrl(searchTerm))
        //    .then(response => {
        //        createCard();
        //    });        
    } else {
        alert("You can't leave the box empty!")
    }
}

/* Skapa innehåll till sökresultat. Se content.js */ 

/* Funktion för att radera sökresultat */
// Raderar det som sätts i parametern
function clearSearch(clear) {
    for (let i= 0; i < clear.length; i++) {
        clear[i].remove();        
    }
}

/* Funktion för att spara via localStorage */

/* Funktion för att hämta data från API (fetch) */

/* Url byggare finns i api.js*/

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */

/* funktion Comics
- bild serietidningen
- information om serietidningen
- skapare */
