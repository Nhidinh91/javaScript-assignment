'use strict';
function checkPrimeNumber (number) {
  let value = true;
  let i = 0;
  for (let num = 1; num <= number; num++){
    if (number%num === 0) {
      i ++;
    }
  }
  if (i >= 3){
    value = false;
  }
  return value;
}

let number = parseInt(prompt('Input a number:'));
if (checkPrimeNumber(number)){
  document.querySelector('#result').innerHTML = `${number} is a prime number`;
}
else{
  document.querySelector('#result').innerHTML = `${number} is not a prime number`;
}