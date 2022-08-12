export default function showHome() {
  const home = document.createElement('div');
  const homeTitle = document.createElement('h1');
  homeTitle.innerText = "Our Restaurant"
  const homeContent = document.createElement('p');
  homeContent.textContent = `We are a family-owned mexican restaurant located
                        in the South End in Boston. We serve authentic
                        recipes from Jalisco, MX.`
  home.appendChild(homeTitle);
  home.appendChild(homeContent);
  
  const main = document.querySelector('.main');
  main.appendChild(home);
}