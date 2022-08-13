import loadStructure from './pageLoad.js'
import showHome from './home.js'
import showMenu from './menu.js'
import showContact from './contact.js'
import './style.css';

loadStructure();

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');



let tabs = [homeTab, menuTab, contactTab];
activateTab(homeTab);

homeTab.addEventListener('click', ()=> {
  clearMainContent();
  showHome();
  activateTab(homeTab);
});

menuTab.addEventListener('click', () => {
  clearMainContent();
  showMenu();
  activateTab(menuTab);
});

contactTab.addEventListener('click', () => {
  clearMainContent();
  showContact();
  activateTab(contactTab);
});

function clearMainContent() {
  const main = document.querySelector('.main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function activateTab(newActiveTab) {
  tabs.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
  });
  newActiveTab.classList.add('active');
}