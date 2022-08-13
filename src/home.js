import outsideImage from './images/chilacates-outside.png'
import burritoImage from './images/burrito.jpg'
import guacamoleImage from './images/guacamole.jpg'

export default function showHome() {
  const home = document.createElement('div');
  const homeTitle = document.createElement('h1');
  homeTitle.innerText = "Our Restaurant"
  home.appendChild(homeTitle);


  // Outside Pic 

  const outside = new Image();
  outside.src = outsideImage;
  home.appendChild(outside);

  const homeContent = document.createElement('p');
  homeContent.textContent = `We are a family-owned mexican restaurant located
                        in the South End in Boston. We serve authentic
                        recipes from Jalisco, MX.`

  home.appendChild(homeContent);

  // Burrito Pic

  const burrito = new Image();
  burrito.src = burritoImage;
  home.appendChild(burrito);

  const homeSecondContent = document.createElement('p');
  homeSecondContent.textContent = `Come on over to our restaurant
                                   for happy hour on every weekday from 5-7PM. We
                                   are known for our delicious margaritas and mezcal
                                   selection.`
  
  home.appendChild(homeSecondContent);

  // Guacamole Pic
  
  const guacamole = new Image();
  guacamole.src = guacamoleImage;
  home.appendChild(guacamole);


  const main = document.querySelector('.main');
  main.appendChild(home);
}