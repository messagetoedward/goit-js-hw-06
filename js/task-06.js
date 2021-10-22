const input = document.querySelector('input');
const dataLength = Number(input.getAttribute('data-length'));


input.addEventListener('blur', checkLength)

function checkLength(event) {
    if (event.currentTarget.value.length === dataLength) {
        input.classList.remove('invalid');
        input.classList.add('valid')
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}


