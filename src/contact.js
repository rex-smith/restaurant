import tacos from './images/tacos.jpg'

export default function showContact() {
  const contact = document.createElement('div');
  const contactTitle = document.createElement('h1');
  contactTitle.innerText = "Contact Us"
  contact.appendChild(contactTitle);

  // Hours

  const hoursTitle = document.createElement('h2');
  hoursTitle.innerText = 'Our Hours';
  contact.appendChild(hoursTitle);

  const hoursListContainer = document.createElement('div');
  const hoursList = document.createElement('ul');
  const monday = document.createElement('li');
  monday.textContent = 'Mon: 12PM - 10PM'
  const tuesday = document.createElement('li');
  tuesday.textContent = 'Tue: 12PM - 10PM'
  const wednesday = document.createElement('li');
  wednesday.textContent = 'Wed: 12PM - 10PM'
  const thursday = document.createElement('li');
  thursday.textContent = 'Thu: 12PM - 10PM'
  const friday = document.createElement('li');
  friday.textContent = 'Fri: 12PM - 10PM'
  const saturday = document.createElement('li');
  saturday.textContent = 'Sa: 12PM - Midnight'
  const sunday = document.createElement('li');
  sunday.textContent = 'Su: 1PM - 8PM'

  hoursList.appendChild(monday);
  hoursList.appendChild(tuesday);
  hoursList.appendChild(wednesday);
  hoursList.appendChild(thursday);
  hoursList.appendChild(friday);
  hoursList.appendChild(saturday);
  hoursList.appendChild(sunday);

  hoursListContainer.appendChild(hoursList);
  contact.appendChild(hoursListContainer);


  // Address

  const addressTitle = document.createElement('h2');
  addressTitle.innerText = 'Where to find us';
  const addressInfo = document.createElement('p');
  addressInfo.innerText = '275 Shawmut Ave, Boston, MA 02118'
  contact.appendChild(addressTitle);
  contact.appendChild(addressInfo);


  // Contact Information

  const detailsTitle = document.createElement('h2');
  detailsTitle.innerText = 'How to Contact Us';


  const detailsContent = document.createElement('p');
  detailsContent.textContent = `chilacates@chill.com or (404) 892-3840`
  contact.appendChild(detailsTitle);
  contact.appendChild(detailsContent);
  
  const main = document.querySelector('.main');
  main.appendChild(contact);
}