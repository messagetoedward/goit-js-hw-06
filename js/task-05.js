const nameInput = document.querySelector('#name-input');
console.log(nameInput);

const nameOutput = document.querySelector('#name-output');
console.log(nameOutput.textContent);

nameInput.addEventListener('input', (event) => {
    if (nameOutput.textContent = event.currentTarget.value) { }
    else (nameOutput.textContent = "Anonymous");
});