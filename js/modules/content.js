export { createCard };
// import { result } from './api.js';

// Förberett för skapelse. Behöver hämtningen klar innan slutförelse.
/*function createCard(hero) {
    // Grundstenen
    const main = document.querySelector('.games');
    // Skapa element
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const heroInfo = document.createElement('div');
    const heroName = document.createElement('h2');

    // Lägg till element
    heroInfo.append(cardInfo);
    heroName.append(cardInfo);
    cardInfo.append(card);
    img.append(card);
    card.append(main);

    // Lägg till innhåll
    heroName.innerHTML = `TestName`;
    heroInfo.innerHTML =    `Testinormation
                            <br>More Test 
                            `;

    // Lägg till CSS
    heroInfo.classList.add('informationHero');
    heroName.classList.add('heroName');
    cardInfo.classList.add('cardInfo');
    card.classList.add('card');
};*/

function createCard(result) {
    document.getElementById('searchCard').style.visibility = 'visible';
    document.getElementById('heroName').textContent = result.name;
    document.getElementById('informationHero').textContent = result.description;
    const img = result.thumbnail.path + "." + result.thumbnail.extension;
    document.getElementById('topImage').src = img;
    document.getElementById('topImage').style.visibility = 'visible';
}

