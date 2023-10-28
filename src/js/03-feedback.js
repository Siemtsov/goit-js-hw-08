import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const dataName = 'feedback-form-state';
if (JSON.parse(localStorage.getItem(dataName)) != undefined) {
  setItems();
}
form.addEventListener('input', throttle(handlerSave, 500));
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
  email.value = null;
  message.value = null;
}
function setItems() {
  const pasteData = JSON.parse(localStorage.getItem(dataName));
  email.value = pasteData.email;
  message.value = pasteData.message;
}
