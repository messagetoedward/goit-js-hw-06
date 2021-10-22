const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert `Do not leave empty fields`
    }
    const formItems = {
        email: email.value,
        password: password.value,

        logItems() {
            console.log(`email: ${email.value}, password: ${password.value}`);
        }
    }
    formItems.logItems();
    event.currentTarget.reset();
}