// Show all the content when the page is first loaded
import home from './home.js'

export default function loadStructure() {

  // Append each element to the content element once the page is loaded
  // Need to export it (and then import into the index.js file)

  const content = document.getElementById('content');

  // Nav Bar
  const navBar = document.createElement('nav');
  navBar.classList.add('navbar');

  const menuLink = document.createElement('div');
  menuLink.classList.add('nav-link');
  menuLink.id = 'menu';
  menuLink.textContent = 'Menu';

  const contactLink = document.createElement('div');
  contactLink.classList.add('nav-link');
  contactLink.id = 'contact';
  const contactText = document.createElement('div');
  contactText.classList.add('nav-link-text');
  contactText.textContent = 'Contact';
  contactLink.appendChild(contactText);


  const homeLink = document.createElement('div');
  homeLink.classList.add('nav-link');
  homeLink.id = 'home';
  homeLink.textContent = 'Home';

  const logoLink  = document.createElement('div');
  logoLink.classList.add('logo');
  logoLink.textContent = 'chilacates';

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('nav-logo');
  const navMenuContainer = document.createElement('div');
  navMenuContainer.classList.add('nav-menu');

  logoContainer.appendChild(logoLink);
  navMenuContainer.appendChild(homeLink);
  navMenuContainer.appendChild(menuLink);
  navMenuContainer.appendChild(contactLink);

  navBar.appendChild(logoContainer);
  navBar.appendChild(navMenuContainer);

  content.appendChild(navBar);

  // Main Content
  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);

  home();

}

