const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngr = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const createLi = document.createElement('li');
  createLi.textContent = el;
  createLi.classList.add('item');
  ulIngr.append(createLi);
})


