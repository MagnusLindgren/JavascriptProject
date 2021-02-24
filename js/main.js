"use strict";
export { searchTerm };
import { testFunction } from "./modules/api.js";

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
    
    searchTerm = searchBox.value;
    testFunction();
    if (searchTerm != null && searchTerm != "") {
        //fetchApi(comicUrl(searchTerm))
        //    .then(response => {
        //        createCard();
        //    });        
    }
}
/* Url byggare */

/* Funktion för att hämta data från API (fetch) */

/* Skapa innehåll till sökresultat */ 

/* Funktion för att radera sökresultat */

/* Funktion för att spara via localStorage */

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */

/* funktion Comics
- bild serietidningen
- information om serietidningen
- skapare */
