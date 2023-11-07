'use strict';
let year = parseInt(prompt('Input a year: '));
if (year%4 === 0 && year%100 !== 0 ){
  document.querySelector('#result').innerHTML = `${year} is a leap year`;
  }
else if (year%100 === 0 && year%400 === 0){
  document.querySelector('#result').innerHTML = `${year} is a leap year`;
}
else {
  document.querySelector('#result').innerHTML = `${year} is not a leap year`;
}
