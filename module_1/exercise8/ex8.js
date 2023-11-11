'use strict';

let yearStart = parseFloat(prompt('Input the start year:'));
let yearEnd = parseFloat(prompt('Input the end year:'));
let list = '';
for (let year = yearStart; year <= yearEnd; year++) {
  if ((year % 4 === 0 && year % 100 !== 0)||(year % 100 === 0 && year % 400 === 0)) {
    list += `<li>${year}</li>`;
  }
}
document.querySelector('#result').innerHTML = list;
