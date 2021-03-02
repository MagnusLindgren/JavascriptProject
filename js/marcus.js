// Public key: cb4caffe743bf27799e98341a711c25f
// Private key: a2772e164899250bf624c834394e5fc6f320ff35

"use strict";
const PublKey = 'cb4caffe743bf27799e98341a711c25f';
const privKey = 'cb4caffe743bf27799e98341a711c25f';

const getPostPromise = fetch('https://gateway.marvel.com/') // Tar ett argument.

getPostPromise
.then(data => data.json())
.then(data => {
    data.posts.foreach((item) => {
        console.log(item.titel); // Hämtar specifikt element i API:N
    });
})
.catch((err) => {  // Skickar ut error meddelande om det blir fel.
    console.log(err)
})

// Få searchbar att ta input och skriva ut bild samt information om hjälten.

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */

/* funktion Comics
- bild serietidningen
- information om serietidningen
- skapare */