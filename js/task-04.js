let counterValue = document.querySelector('#value');
counterValue.textContent = 0

const incrBtn = document.querySelector('button[data-action="increment"]')
console.log(incrBtn);

const decrBtn = document.querySelector('button[data-action="decrement"]')
console.log(decrBtn);

const incrClick = event => {
    counterValue.textContent++;
}

const decrClick = event => {
    counterValue.textContent--;
}

incrBtn.addEventListener('click', incrClick);

decrBtn.addEventListener('click', decrClick);