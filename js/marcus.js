// Public key: cb4caffe743bf27799e98341a711c25f
// Private key: a2772e164899250bf624c834394e5fc6f320ff35


"use strict";
const PublicKey = 'cb4caffe743bf27799e98341a711c25f';
const privateKey = 'a2772e164899250bf624c834394e5fc6f320ff35';
let newTime = new Date().getTime();
let hash = CryptoJS.MD5(newTime + privateKey + PublicKey).toString();

// Funktion för att hämta specifik marvel hjälte.
function GetCharacter(){
    const url = new URL ('https://gateway.marvel.com/v1/public/characters')

    url.searchParams.append('ts', newTime);
    url.searchParams.append('apikey', PublicKey);
    url.searchParams.append('hash', hash)
    url.searchParams.append('name', "iron man");

    return url;
};

// Knapp funktion som hämtar resultatet ifrån APIN.
document.querySelector('#button').onclick = async function() {
    const response = await fetch(GetCharacter());
    const data = await response.json();
    console.log(data);
    return data;
}

const searchBox = document.querySelector('.searchbar').value = async function() {
    const response = await fetch(GetCharacter());
    const data = await response.json();
    console.log(data);
    return data;
}


// Få searchbar att ta input och skriva ut bild samt information om hjälten.

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */

/* funktion Comics
- bild serietidningen
- information om serietidningen
- skapare */