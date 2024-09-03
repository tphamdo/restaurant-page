import { loadHomePage, loadMenuPage, loadAboutPage } from './page-load.js' 

const homeButton = document.querySelector("header #home");
const menuButton = document.querySelector("header #menu");
const aboutButton = document.querySelector("header #about");

loadHomePage();

homeButton.onclick = loadHomePage;
menuButton.onclick = loadMenuPage;
aboutButton.onclick = loadAboutPage;
