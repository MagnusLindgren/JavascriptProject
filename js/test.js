"use strict";
const privateKey = "b007589db8518dcbb941ed7bdef21b3840498b0a";
const publicKey = "b52df188d35ef1bbeef3878e0342661c";
let newTime = new Date().getTime();
let hash = CryptoJS.MD5(newTime + privateKey + publicKey).toString();

function comicUrl() {
    const url = new URL("https://gateway.marvel.com/v1/public/characters");
    
    url.searchParams.append('ts', newTime);
    url.searchParams.append('apikey', publicKey);
    url.searchParams.append('hash', hash);
    url.searchParams.append('name', "iron man");
    

    return url;
}

document.querySelector("#test").onclick = async function() {
    const response = await fetch(comicUrl());
    const data = await response.json();
    console.log(data);
}