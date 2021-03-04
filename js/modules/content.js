export { createCard };
// import { result } from './api.js';

// Förberett för skapelse. Behöver hämtningen klar innan slutförelse.
function createCard(result) {
    // Grundstenen
    const main = document.querySelector('.games');
    // Skapa element
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const heroInfo = document.createElement('div');
    const heroName = document.createElement('h2');
    const copyright = document.createElement('p');

    const prefix = result.data.results[0];

    // Lägg till element
    main.append(card);
    card.append(img);
    card.append(cardInfo);
    cardInfo.append(heroName);
    cardInfo.append(heroInfo);
    cardInfo.append(copyright);
    
    // Lägg till innhåll
    img.src = `${prefix.thumbnail.path}.${prefix.thumbnail.extension}`;
    heroName.innerHTML = `${prefix.name}`;
    heroInfo.innerHTML = `${prefix.description}`;
    copyright.innerHTML = `${result.attributionHTML}`;

    // Lägg till CSS
    heroInfo.classList.add('informationHero');
    heroName.classList.add('heroName');
    img.setAttribute('id', 'topImage');
    cardInfo.classList.add('cardInfo');
    card.classList.add('card');
};
/*
function createCard(result) {
    document.getElementById('searchCard').style.visibility = 'visible';
    document.getElementById('heroName').textContent = result.name;
    document.getElementById('informationHero').textContent = result.description;
    const img = result.thumbnail.path + "." + result.thumbnail.extension;
    document.getElementById('topImage').src = img;
    document.getElementById('topImage').style.visibility = 'visible';
}
*/
