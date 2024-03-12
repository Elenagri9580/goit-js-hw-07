'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
let amount = 0;
function handleInput(event) {
  amount = event.target.value;
}
input.addEventListener('input', handleInput);

const btnCreate = document.querySelector('button[data-create]');
const divBox = document.querySelector('#boxes');
const handleClickCreate = event => {
  function createBoxes(amount) {
    if (1 <= amount <= 100) {
      divBox.innerHTML = '';
      for (let i = 1; i <= amount; i++) {
        const divNewBox = document.createElement('div');
        divNewBox.style.width = '30px'; 
        divNewBox.style.height = '30px';
        divNewBox.style.backgroundColor = getRandomHexColor();
        divBox.append(divNewBox);
        console.log(divNewBox); // не розумію, як збільшувати на 10px width і height з кожною ітерацією
      }
    }
  }
  event = createBoxes(amount);
  input.value = ''; // це очищає, але якщо повторно нажати btnCreate - все одно генеруються divNewBox, 
  //не знаю як зробити правильно
};

btnCreate.addEventListener('click', handleClickCreate);

const btnDestroy = document.querySelector('button[data-destroy]');
btnDestroy.classList.add('destroy'); // додаю клас на кнопку, щоб зробити css стилі, але стилі не додаються 

const handleClickDestroy = event => {
  function destroyBoxes() {
    divBox.innerHTML = '';
  }
  event = destroyBoxes();
};

btnDestroy.addEventListener('click', handleClickDestroy);
