// Public key: cb4caffe743bf27799e98341a711c25f
// Private key: a2772e164899250bf624c834394e5fc6f320ff35

document.addEventListener("DOMcontentLoaded", bindButtons);
var apikey = "cb4caffe743bf27799e98341a711c25f";
var pKey = "a2772e164899250bf624c834394e5fc6f320ff35";

function bindButtons (event)
{

    var number = event.timestamp;
    var req = new XMLHttpRequest();
    var website = 'http://gateway.marvel.com/v1/public/characters?name='
    var name = document.getElementById('.heroName').value;
    var web = website + name + "ts=" + number + '&apikey=' + apikey + "&hash=" + pKey;

    document.getElementById('searchbar').addEventListener('click', function(event){
    document.getElementById('heroName').textContent = "";
    document.getElementById('information').textContent = "";
    });
    req.open('GET', web, true);

    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400) {
            var result = JSON.parse(req.responseText);
            document.getElementById('name').textContent = result.name
            document.getElementById('information').textContent = result.information;
        }

        event.preventDefault();
    });
    req.send(null);
    
}

/*Funktion Superhjältar
- bild på hjälten
- information om hjälten
- skapare */

/* funktion Comics
- bild serietidningen
- information om serietidningen
- skapare */