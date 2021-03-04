// class="heroName" Hero: WANDA MAXIMOF Hjältens namn skall skriva ut här.
// class="informationHero" Information om hjälten skall skriva ut här.
// class="searchbar" sökfunktion.
// id="button" knappfunktion.

// document.addEventListener("DOMContentLoaded", heroBind);
const publicKey = "cb4caffe743bf27799e98341a711c25f";
const privateKey = "a2772e164899250bf624c834394e5fc6f320ff35";
document.getElementById('button').addEventListener('click', function (event) {
   // console.log("click");
    const searchButton = document.getElementById("searchbar");
    document.getElementById('heroName').textContent = "Hero: ";
    document.getElementById('informationHero').textContent = "Information: ";
    document.getElementById('informationComicHero').textContent = "Description: "; // Här skall det läggas in nya ID'S för comics.
    document.getElementById('comicName').textContent = "Comic: ";

    findHero(searchButton.value, event); 
    iterateComics(searchButton.value, event); 
    document.getElementById('searchbar').textContent = "";
});


function findHero(query, event) {

    const website = 'https://gateway.marvel.com/v1/public/characters';

   // console.log("do hash");
    const ts = event.timeStamp;
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
   // console.log(hash);
    const url = website;
    $.getJSON(url, {
        ts: ts,
        apikey: publicKey,
        hash: hash,
        name: query
    })
        .done(function (response) {
            console.log(response);
            const result = response.data.results[0];
            if (result != null) {
                //console.log("WE HAVE A RESULT!!!");
                console.log(result);
                document.getElementById('searchCard').style.visibility = 'visible';
                document.getElementById('heroName').textContent = result.name;
                document.getElementById('informationHero').textContent = result.description;
                const img = result.thumbnail.path + "." + result.thumbnail.extension;
                document.getElementById('topImage').src = img;
                document.getElementById('topImage').style.visibility = 'visible';
                iterateComics(response); // Skickar vidare variabel.
            } else {
                //console.log("we do not have a result :(((((((((((((((((((((")
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


function iterateComics(response) {
    
    const website = 'https://gateway.marvel.com/v1/public/characters/' + response.data.results[0].id + '/comics/' + publicKey;
    fetch(website, {
        mode: 'no-cors'
    });
    
    /*
    console.log('do hash')
    const ts = event.timeStamp;
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    console.log(hash);
    const url = website;
    $.getJSON(url, {
        ts: ts,
        apikey: publicKey,
        hash: hash,
        id: response.data.results[0].id*/
    /*})
    .done(function (response) {
        console.log(response);
        const result = response.data.results[0];
        if(result != null) {
            console.log(result);
            while(result > 0) {
                
            }
        }

    })*/
}

/*<img id="comicImg" src="" alt="" style="width: 12rem; height: 12em; visibility: hidden"  />
<div class="card-info"> <!--Informations kort-->
<h2 id="comicName" class="comicName"></h2>
<p id="informationComicHero" class="informationComicHero"></p>







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
            console.log(result);k
        
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
*/