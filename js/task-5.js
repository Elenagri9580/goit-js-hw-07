'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const handleClick = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
  console.log(body.style.backgroundColor);
};

button.addEventListener('click', handleClick);
