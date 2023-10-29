import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const dataName = 'feedback-form-state';

form.addEventListener('input', throttle(handlerSave, 500));
document.addEventListener('DOMContentLoaded', loadingConten);
form.addEventListener('submit', handlerSubmit);

function handlerSave() {
  const saveData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(dataName, JSON.stringify(saveData));
}
function handlerSubmit(evt) {
  evt.preventDefault();
  email.value = '';
  message.value = '';

  const feedbackState = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('Form submitted with feedback:', feedbackState);

  localStorage.removeItem(dataName);
}

function loadingConten() {
  const inputValues = JSON.parse(localStorage.getItem(dataName));
  if (inputValues) {
    email.value = inputValues.email || '';
    message.value = inputValues.message || '';
  }
}
