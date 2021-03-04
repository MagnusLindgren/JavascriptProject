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
            if (response != null) {
                console.log("WE HAVE A RESULT!!!");
                console.log(response);
                createCard(response);

            } else {
                console.log("we do not have a result :(((((((((((((((((((((")
                document.getElementById('heroName').textContent = 'NOT FOUND FFS - Search better!';
                document.getElementById('topImage').src = "";
                document.getElementById('topImage').style.visibility = 'hidden';
                document.getElementById('informationHero').textContent = '';
            }

   
        })
        .fail(function (err) {
            // the error codes are listed on the dev site
            console.log(err);
        });
}