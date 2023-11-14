'use strict';
const button = document.querySelector('#start');
const result = document.querySelector('#result');
function calculate(){
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  let x = 0;

  switch (document.querySelector('#operation').value) {
    case 'add':
      x = parseFloat(num1)+parseFloat(num2);
      break;
    case 'sub':
      x = parseFloat(num1)-parseFloat(num2);
      break;
    case 'multi':
      x = parseFloat(num1)*parseFloat(num2);
      break;
    case 'div':
      x = parseFloat(num1)/parseFloat(num2);
      break;
    default:
      alert('Please choose 1 calculater perform!');
  }
  result.innerHTML = `Result = ${x.toFixed(2)}`;
}
button.addEventListener('click', calculate);