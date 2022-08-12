import loadStructure from './pageLoad.js'
import showHome from './home.js'
import showMenu from './menu.js'
// import showContact from './contact.js'

import './style.css';

loadStructure();

// Event handlers for the different items in the structure
// Run each tab showing and clearing function when clicked

// The real question is how to get the different elements to be
// passed up into this file to handle what happens

// Each tab needs to have it's own function since they display
// different things

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

homeTab.addEventListener('click', ()=> {
  clearMainContent();
  showHome(); 
});

menuTab.addEventListener('click', () => {
  clearMainContent();
  showMenu();
});

// contactTab.addEventListener('click', () => {
//   clearMainContent;
//   showContact;
// });


function clearMainContent() {
  const main = document.querySelector('.main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}