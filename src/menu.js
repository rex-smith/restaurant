export default function showMenu() {
  const menu = document.createElement('div');
  const menuTitle = document.createElement('h1');
  menuTitle.innerText = "Menu"

  menu.appendChild(menuTitle);

  const appetizerContainer = document.createElement('div');
  const appetizerTitle = document.createElement('h2');
  appetizerTitle.innerText = 'Appetizers';
  appetizerContainer.appendChild(appetizerTitle);

  const entreeContainer = document.createElement('div');
  const entreeTitle = document.createElement('h2');
  entreeTitle.innerText = 'Entrees';
  entreeContainer.appendChild(entreeTitle);

  const sideContainer = document.createElement('div');
  const sideTitle = document.createElement('h2');
  sideTitle.innerText = 'Sides';
  sideContainer.appendChild(sideTitle);

  let appetizerArray = [
    {name: 'Burrata', cost: '12.50'},
    {name: 'Bread and Butter', cost: '6.50'},
    {name: 'Quesadilla', cost: '14.25'},
    {name: 'Chips and Salsa', cost: '4.00'},
    {name: 'Guacamole', cost: '9.25'}
  ]

  let entreeArray = [
    {name: 'Burrito', cost: '12.25'},
    {name: 'Fajitas', cost: '15.75'},
    {name: 'Steak Tacos', cost: '13.25'},
    {name: 'Chicken Tacos', cost: '12.75'},
    {name: 'Mexican Corn Salad', cost: '16.95'}
  ]

  let sideArray = [
    {name: 'Beans', cost: '4.25'},
    {name: 'Rice', cost: '3.75'},
    {name: 'Extra Tortilla', cost: '2.50'},
    {name: 'Tortilla Soup', cost: '8.25'}
  ]
  createDishes(appetizerArray, appetizerContainer);
  createDishes(entreeArray, entreeContainer);
  createDishes(sideArray, sideContainer);

  function createDishes(array, container) {
    array.forEach(app => {
      const newMenuItem = document.createElement('div');
      newMenuItem.classList.add('dish');
      const newMenuItemTitle = document.createElement('div');
      newMenuItemTitle.classList.add('dish-title');
      const newMenuItemCost = document.createElement('div');
      newMenuItemCost.classList.add('dish-cost');
      newMenuItemTitle.textContent = `${app.name}`;
      newMenuItemCost.textContent = `$${app.cost}`;
      newMenuItem.appendChild(newMenuItemTitle);
      newMenuItem.appendChild(newMenuItemCost);
      container.appendChild(newMenuItem);
    })
  }

  menu.appendChild(appetizerContainer);
  menu.appendChild(entreeContainer);
  menu.appendChild(sideContainer);

  const main = document.querySelector('.main');
  main.appendChild(menu);
}