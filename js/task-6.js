'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
let value = 0;
function handleInput(event) {
  value = event.target.value;
}
input.addEventListener('input', handleInput);

const btnCreate = document.querySelector('button[data-create]');
const divBox = document.querySelector('#boxes');
const handleClickCreate = () => {
  function createBoxes(amount) {
    divBox.innerHTML = '';    
    if (Number(input.min) <= amount && amount <= Number(input.max)) {
      let width = 30;
      let height = 30;
      let arrBoxes = [];
      for (let i = 1; i <= amount; i++) {
        const divNewBox = document.createElement('div');
        divNewBox.style.width = `${width}px`;
        divNewBox.style.height = `${height}px`;
        divNewBox.style.backgroundColor = getRandomHexColor();
        arrBoxes.push(divNewBox);
        width += 10;
        height += 10;
      }
      return divBox.append(...arrBoxes);
    }    
  }
  createBoxes(value); 
  input.value = '';
};
btnCreate.addEventListener('click', handleClickCreate);

const btnDestroy = document.querySelector('button[data-destroy]');

const handleClickDestroy = () => {
  function destroyBoxes() {
    divBox.innerHTML = '';
  }
  destroyBoxes();
};
btnDestroy.addEventListener('click', handleClickDestroy);
