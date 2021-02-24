"use strict";
export { searchTerm };
let searchTerm;
/* Sökfunktion */
const searchBox = document.querySelector('.searchbar');

searchBox.addEventListener('keyup', function(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        //executeSearch();
        searchTerm = searchBox.value;
        console.log(searchBox.value);
        return searchTerm;
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

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */

/* funktion Comics
- bild serietidningen
- information om serietidningen
- skapare */
