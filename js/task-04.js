let counterValue = document.querySelector('#value');
counterValue.textContent = 0

const incrBtn = document.querySelector('button[data-action="increment"]')
console.log(incrBtn);

const decrBtn = document.querySelector('button[data-action="decrement"]')
console.log(decrBtn);

let counter = 0;

const incrClick = event => {
    counter += 1;
    counterValue.textContent = counter;
}

const decrClick = event => {
    counter -= 1;
    counterValue.textContent = counter;
}

incrBtn.addEventListener('click', incrClick);
decrBtn.addEventListener('click', decrClick);