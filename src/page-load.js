import foodJpg from './food.jpg'

const body = document.querySelector('body');
const content = document.querySelector('#content');

export function loadHomePage() {
    _clearContentDiv();
    const headline = document.createElement('h1');
    headline.textContent = "Filipino Cuisine";

    const img = document.createElement('img');
    img.setAttribute("src", foodJpg);
    img.setAttribute("height", "200px");
    img.setAttribute("width", "200px");

    const description = document.createElement('p');
    description.textContent = "Lorem aperiam ad qui ab hic. Itaque incidunt quibusdam quidem vero atque! Sed libero cumque illo rerum consectetur deleniti! Modi dicta quibusdam amet itaque ab? Temporibus voluptates sapiente eveniet deserunt."

    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(description);
}

export function loadMenuPage() {
    _clearContentDiv();
    const headline = document.createElement('h1');
    headline.textContent = "Menu";

    const description = document.createElement('p');
    description.textContent = "Lorem aperiam ad qui ab hic. Itaque incidunt quibusdam quidem vero atque! Sed libero cumque illo rerum consectetur deleniti! Modi dicta quibusdam amet itaque ab? Temporibus voluptates sapiente eveniet deserunt."

    content.appendChild(headline);
    content.appendChild(description);
}

export function loadAboutPage() {
    _clearContentDiv();
    const headline = document.createElement('h1');
    headline.textContent = "About";

    const description = document.createElement('p');
    description.textContent = "Lorem aperiam ad qui ab hic. Itaque incidunt quibusdam quidem vero atque! Sed libero cumque illo rerum consectetur deleniti! Modi dicta quibusdam amet itaque ab? Temporibus voluptates sapiente eveniet deserunt."

    content.appendChild(headline);
    content.appendChild(description);
}

function _clearContentDiv() { 
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
