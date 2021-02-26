"use strict";
export { searchTerm };
import { testFunction } from './modules/api.js';
import { createHeroCard } from './modules/content.js';

let searchTerm;
const searchButton = document.querySelector('#button');
const searchBox = document.querySelector('.searchbar');

checkCookie();

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
        setCookie("Recently searched", searchTerm, 30);
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

/* Funktion för att spara via kakor */
// Kaktest 
function setCookie(cName, cValue, cExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (cExpire*24*60*60*1000));
    const expires = "expires="+date.toUTCString();
    document.cookie = `${cName}=${cValue};${expires};path=/`;
}

function getCookie(cName) {   
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].split("=");

        if (cName == c[0].trim()) {
            return decodeURIComponent(c[1]);
        }
    }
    return "";
}

function checkCookie() {
    let searchTerm = getCookie("Recently searched"); // hämtar senaste sökordet
    let searchInput = document.querySelector('.searched');

    if (searchTerm != "") {      
        searchInput.innerText = searchTerm;
    } else {
        searchInput.innerText = "You havn't searched anything yet";
    }
}

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
