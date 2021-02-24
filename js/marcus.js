// Public key: cb4caffe743bf27799e98341a711c25f
// Private key: a2772e164899250bf624c834394e5fc6f320ff35

"use strict";
const privateKey = "a2772e164899250bf624c834394e5fc6f320ff35";
const publicKey = "cb4caffe743bf27799e98341a711c25f";
let newTime = new Date().getTime();
let hash = CryptoJS.MD5(newTime + privateKey + publicKey).toString();

function comicUrl() {  //Hämtar information genom API call på hjältar.
    const url = new URL("https://gateway.marvel.com/v1/public/characters");
    
    url.searchParams.append('ts', newTime);
    url.searchParams.append('apikey', publicKey);
    url.searchParams.append('hash', hash);
    url.searchParams.append('name', "Spider-Man");
    

    return url;
}
// Knapp funktion. 
document.querySelector("#button").onclick = async function() {
    const response = await fetch(comicUrl());
    const data = await response.json();
    console.log(data);
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