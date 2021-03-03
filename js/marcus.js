// class="heroName" Hero: WANDA MAXIMOF Hjältens namn skall skriva ut här.
// class="informationHero" Information om hjälten skall skriva ut här.
// class="searchbar" sökfunktion.
// id="button" knappfunktion.

document.addEventListener("DOMcontentLoaded", heroBind);
const publicKey = "cb4caffe743bf27799e98341a711c25f";
const privateKey = "a2772e164899250bf624c834394e5fc6f320ff35";

function heroBind(event){

    const number = event.timestamp;
    const req = new XMLHttpRequest();
    const website = 'https://gateway.marvel.com/v1/public/characters?name='
    const name = document.getElementById('heroName').value;
    const web = website + name + "ts=" + number + '&apikey=' + publicKey + "&hash=" + privateKey;

    document.getElementById('button').addEventListener('click', function (event){
    document.getElementById('searchbar').textContent = "";
    document.getElementById('informationHero').textContent = "";
    });
    req.open('GET', web, true);

    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('load', function(){
        if(req.status >= 200 && req.status < 400) {
            const result = JSON.parse(req.responseText);
            document.getElementById('heroName').textContent = result.heroName;
            document.getElementById('informationHero').textContent = result.informationHero;
            const img = document.createElement('img'); // Hämtar bild för val av hjälte input.
            img.src = result.thumbnail.path + '/landscape_medium.jpg';
            document.getElementById('pic').appendChild(img)

        }

    event.preventDefault();
    });
    req.send(null);


}


// Få searchbar att ta input och skriva ut bild samt information om hjälten.

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */