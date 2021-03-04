export { findHero };
//import { query } from '../main.js';
import { createCard } from './content.js';

const privateKey = "b007589db8518dcbb941ed7bdef21b3840498b0a";
const publicKey = "b52df188d35ef1bbeef3878e0342661c";
/*
let newTime = new Date().getTime();
let hash = CryptoJS.MD5(newTime + privateKey + publicKey).toString();

function comicUrl() {
    const url = new URL("https://gateway.marvel.com/v1/public/characters");
    
    url.searchParams.append('ts', newTime);
    url.searchParams.append('apikey', publicKey);
    url.searchParams.append('hash', hash);
    url.searchParams.append('name', searchTerm);
    
    return url;
};

async function fetchApi(url) {

}
*/
// För att testa om modules fungerar
/*
function testFunction() {
console.log(searchTerm, "från main.js");
}*/

function findHero(query) {

    const website = 'https://gateway.marvel.com/v1/public/characters';

    console.log("do hash");
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    console.log(hash);
    const url = website;
    $.getJSON(url, {
        ts: ts,
        apikey: publicKey,
        hash: hash,
        name: query
    })
        .done(function (response) {
            console.log(response);            
            if (response.data.results[0] != null) {
                console.log("WE HAVE A RESULT!!!");
                console.log(response);
                createCard(response);
            } else {
                console.log("we do not have a result :(((((((((((((((((((((")
                const card = document.createElement('div');
                document.querySelector('.games').append(card);
                card.setAttribute('class', 'card');
                card.innerText = 'NOT FOUND FFS - Search better!';
            }
        })
        .fail(function (err) {
            // the error codes are listed on the dev site
            console.log(err);
        });
}