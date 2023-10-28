import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const dataName = 'feedback-form-state';
if (localStorage.getItem(dataName) != 0) {
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
