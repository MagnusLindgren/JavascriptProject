// class="heroName" Hero: WANDA MAXIMOF Hjältens namn skall skriva ut här.
// class="informationHero" Information om hjälten skall skriva ut här.
// class="searchbar" sökfunktion.
// id="button" knappfunktion.

// document.addEventListener("DOMContentLoaded", heroBind);
var publicKey = "cb4caffe743bf27799e98341a711c25f";
var privateKey = "a2772e164899250bf624c834394e5fc6f320ff35";
document.getElementById('button').addEventListener('click', function (event) {
    console.log("click");
    var searchButton = document.getElementById("searchbar");
    document.getElementById('heroName').textContent = "Hero: ";
    document.getElementById('informationHero').textContent = "Information: ";

    findHero(searchButton.value, event); 
    document.getElementById('searchbar').textContent = "";
});


function findHero(query, event) {

    var website = 'https://gateway.marvel.com/v1/public/characters';

    console.log("do hash");
    var ts = event.timeStamp;
    var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    console.log(hash);
    var url = website;
    $.getJSON(url, {
        ts: ts,
        apikey: publicKey,
        hash: hash,
        name: query
    })
        .done(function (response) {
            console.log(response);
            var result = response.data.results[0];
            if (result != null) {
                console.log("WE HAVE A RESULT!!!");
                console.log(result);
                document.getElementById('searchCard').style.visibility = 'visible';
                document.getElementById('heroName').textContent = result.name;
                document.getElementById('informationHero').textContent = result.description;
                var img = result.thumbnail.path + "." + result.thumbnail.extension;
                document.getElementById('topImage').src = img;
                document.getElementById('topImage').style.visibility = 'visible';
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

  
/*function findHero2(query, event) {
  
    var website = 'https://gateway.marvel.com/v1/public/characters';

    var req = new XMLHttpRequest();
        console.log("do hash");
    var ts = event.timeStamp;
    var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        var url = website + "?name=" + query + "&ts=" + ts + '&apikey=' + publicKey + "&hash=" + hash;
    console.log(url);

    req.open('GET', url, true);

    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load', function () {
        console.log("load event triggered");
        if (req.status >= 200 && req.status < 400) {
            console.log("decent status code");
            var response = JSON.parse(req.responseText);
            var result = response.data.results[0];
            console.log(result);
        
           if (result != null) {
                console.log("WE HAVE A RESULT!!!");
                console.log(result);
                document.getElementById('searchCard').style.visibility = 'visible';
                document.getElementById('heroName').textContent = result.name;
                document.getElementById('informationHero').textContent = result.description;
                var img = result.thumbnail.path + "." + result.thumbnail.extension;
                document.getElementById('topImage').src = img;
                document.getElementById('topImage').style.visibility = 'visible';
            } else {
                console.log("we do not have a result :(((((((((((((((((((((")
                document.getElementById('heroName').textContent = 'NOT FOUND FFS - Search better!';
                document.getElementById('topImage').src = "";
                document.getElementById('topImage').style.visibility = 'hidden';
                document.getElementById('informationHero').textContent = '';
            }
        }

        event.preventDefault();
    });
    console.log("Sending request");
    req.send(null);
};





// Få searchbar att ta input och skriva ut bild samt information om hjälten.

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */