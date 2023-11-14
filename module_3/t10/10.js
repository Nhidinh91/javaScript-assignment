'use strict';

const submit = document.querySelector('#source input[type ="submit"]');
const target = document.querySelector('#target');
function print(e){
  e.preventDefault();
  const firstName = document.querySelector('#source input[name="firstname"]').value;
  const lastName = document.querySelector('#source input[name="lastname"]').value;
  target.innerHTML = `Your name is ${firstName} ${lastName}`;
}
submit.addEventListener('click', print);