const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngr = document.querySelector('#ingredients');

const items = ingredients.map(el => {
  const createLi = document.createElement('li');
  createLi.textContent = el;
  createLi.classList.add('item');
  return createLi;
})

ulIngr.append(...items);