"use strict";
/* Skickar och hämtar det vi behöver till och från andra filer */
export { searchTerm };
// import { testFunction } from './modules/api.js'; // För att testa moduler
import { createHeroCard } from './modules/content.js';

let searchTerm;
const searchButton = document.querySelector('#button');
const searchBox = document.querySelector('.searchbar');

/* Kollar om det finnas några tidigare sökningar */
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
    // testFunction(); // För att testa moduler
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
    let searchedWords = [];
    for (let i = 0; i < ca.length; i++) {
        
        let c = ca[i].split("=");/*
        searchedWords[(c[0]+'').trim()] = unescape(c.slice(1).join('='));
        */
        if (cName == c[0].trim()) {
            searchedWords[i] = decodeURIComponent(c[1]);
        }
    }
    return searchedWords;
}

function checkCookie() {
    let searchTerm = getCookie("Recently searched"); // hämtar senaste sökordet
    let searchInput = document.querySelector('.searched');

    if (searchTerm != "") {
        for (let i = 0; i < searchTerm.length; i++) {
            let element = searchTerm[i];

            searchInput.innerHTML = `${element} <br>`;
        }   
        
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
