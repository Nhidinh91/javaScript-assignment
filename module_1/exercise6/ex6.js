'use strict';
let action = confirm('Should I calculate the square root?');
if (action === true){
  let number = parseFloat(prompt('Input a number: '));
  if (number >= 0){
    let square_root = Math.sqrt(number);
    document.querySelector('#result').innerHTML = `The square root of ${number} = ${square_root}`;
  }
  if (number < 0){
    document.querySelector('#result').innerHTML = `The square root of a negative number is not defined`;
  }
}
else{
  document.querySelector('#result').innerHTML = `The square root is not calculated.`;
}