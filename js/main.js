"use strict";

/* Sökfunktion */
const searchBox = document.querySelector('.searchbar');

searchBox.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        //executeSearch();
        let searchTerm = searchBox.value;
        console.log(searchBox.value)
    }
});

function executeSearch() {
    console.log("sökt");     
}
/* Url byggare */

/* Funktion för att hämta data från API (fetch) */

/* Skapa innehåll till sökresultat */ 

/* Funktion för att radera sökresultat */

/* Funktion för att spara via localStorage */

/* film, comic och serie för val av checkbox sökning*/
/* Söka efter hjältar som visar vilka filmer/serietidiningar den är med i. Eventuellt filmer om det finns med i APIN*/