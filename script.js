function isEmailValid(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = email.match(regex);
  return !!result;
}

function handleForm() {
  const email = input.value;
  if (isEmailValid(email)) {
    if (form.classList.contains('invalid')) {
      form.classList.remove('invalid');
    }
    input.value = '';
    form.classList.add('valid');
  } else {
    if (form.classList.contains('valid')) {
      form.classList.remove('valid');
    }
    form.classList.add('invalid');
  }
}

const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector("button");
button.addEventListener('click', handleForm);