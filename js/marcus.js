// class="heroName" Hero: WANDA MAXIMOF Hjältens namn skall skriva ut här.
// class="informationHero" Information om hjälten skall skriva ut här.
// class="searchbar" sökfunktion.
// id="button" knappfunktion.

// document.addEventListener("DOMContentLoaded", heroBind);
const publicKey = "cb4caffe743bf27799e98341a711c25f";
const privateKey = "a2772e164899250bf624c834394e5fc6f320ff35";
document.getElementById('button').addEventListener('click', function (event) { // click funktion vid element när användare skriver in val av hjälte.
    const searchButton = document.getElementById("searchbar");
    document.getElementById('heroName').textContent = "Hero: ";
    document.getElementById('informationHero').textContent = "Information: ";
    document.getElementById('informationComicHero').textContent = "Description: "; // Här skall det läggas in nya ID'S för comics.
    document.getElementById('comicName').textContent = "Comic: ";

    findHero(searchButton.value, event); 
    document.getElementById('searchbar').textContent = "";
});


function findHero(query, event) { // Funktion för att hämta hjälte med information och bild.

    const website = 'https://gateway.marvel.com/v1/public/characters'; // Gateway för att kunna hämta karaktär ifrån API

    const ts = event.timeStamp;
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    const url = website;
    $.getJSON(url, { //JSON query. 
        ts: ts,
        apikey: publicKey,
        hash: hash,
        name: query
    })
        .done(function (response) {
            console.log(response);
            const result = response.data.results[0];
            if (result != null) { // Om input inte är lika med 0 / " " så skriv ut resultat.
                console.log(result);
                document.getElementById('searchCard').style.visibility = 'visible';
                document.getElementById('heroName').textContent = result.name;
                document.getElementById('informationHero').textContent = result.description;
                const img = result.thumbnail.path + "." + result.thumbnail.extension;
                document.getElementById('topImage').src = img;
                document.getElementById('topImage').style.visibility = 'visible';
            } else { // Annars göm bild och text och skriv ut ett meddelande att hjälten inte finns
                document.getElementById('heroName').textContent = 'Hero not found, try again.';
                document.getElementById('topImage').src = "";
                document.getElementById('topImage').style.visibility = 'hidden';
                document.getElementById('informationHero').textContent = '';
            }
        })
        .fail(function (err) {
            // error kod som finns loggade på utvecklarens hemsidan för API:N
            console.log(err);
        });
}




