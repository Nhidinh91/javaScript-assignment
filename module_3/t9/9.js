'use strict';
const button = document.querySelector('#start');
const result = document.querySelector('#result');
function calculate(){
  const input = document.querySelector('#calculation').value;
  let string = null;
  let x = 0;
  if (input.includes('+')){
    string = input.split('+');
    x = parseInt(string[0]) + parseInt(string[1]);
  } else if (input.includes('-')){
    string = input.split('-');
    x = parseInt(string[0]) - parseInt(string[1]);
  } else if (input.includes('*')){
    string = input.split('*');
    x = parseInt(string[0]) * parseInt(string[1]);
  } else if (input.includes('/')) {
    string = input.split('/');
    x = parseInt(string[0]) / parseInt(string[1]);
  } else {
    alert('Please enter a calculation with +-*/');
  }
  result.innerHTML = `Result = ${x}`;
}
button.addEventListener('click', calculate);