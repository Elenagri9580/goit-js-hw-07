'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', addSpanName);

function addSpanName(event) {
  nameOutput.textContent = event.currentTarget.value.trim() || 'Anonymous';
}
