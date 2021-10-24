const nameInput = document.querySelector('#name-input');
console.log(nameInput);

const nameOutput = document.querySelector('#name-output');
console.log(nameOutput.textContent);

nameInput.addEventListener('input', (event) => {
    if (event.currentTarget.value !== '') {
        return nameOutput.textContent = event.currentTarget.value;
    }
    return nameOutput.textContent = "Anonymous";
});