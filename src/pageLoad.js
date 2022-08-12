// Show all the content when the page is first loaded

export default function loadStructure() {

  // Append each element to the content element once the page is loaded
  // Need to export it (and then import into the index.js file)

  const content = document.getElementById('content');

  // Nav Bar
  const navBar = document.createElement('nav');
  navBar.classList.add('navbar');

  const aboutLink = document.createElement('div');
  aboutLink.classList.add('nav-link');
  aboutLink.textContent = 'About';

  const menuLink = document.createElement('div');
  menuLink.classList.add('nav-link');
  menuLink.textContent = 'Menu';

  const contactLink = document.createElement('div');
  contactLink.classList.add('nav-link');
  contactLink.textContent = 'Contact';

  const homeLink = document.createElement('div');
  homeLink.classList.add('nav-link');
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


  // Home

  const home = document.createElement('div');
  const homeTitle = document.createElement('h1');
  homeTitle.innerText = "Our Restaurant"
  const homeContent = document.createElement('p');
  homeContent.textContent = `We are a family-owned mexican restaurant located
                        in the South End in Boston. We serve authentic
                        recipes from Jalisco, MX.`
  home.appendChild(homeTitle);
  home.appendChild(homeContent);

  main.appendChild(home)

  // Menu

  // About



  // Contact

  // Footer
  const footer = document.createElement('div');


}

