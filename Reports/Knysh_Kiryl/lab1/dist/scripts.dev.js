"use strict";

inputs = document.querySelectorAll('.input');
console.log(inputs);
inputs.forEach(function (element) {
  input = element.querySelector('input, select');

  if (input.hasAttribute('required')) {
    label = element.querySelector('.label');
    requiredTag = document.createElement('p');
    requiredTag.classList.add('required');
    requiredTag.innerHTML = '*';
    label.appendChild(requiredTag);
  }
});