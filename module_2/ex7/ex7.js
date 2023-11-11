'use strict';

function rollDice(numberSides){
  return Math.floor(Math.random()*numberSides)+1;
}
let numberSides = parseInt(prompt('Input the number of sides on the dice'))
let result = null;
let print = '';
while (true){
  result = rollDice(numberSides);
  print += `<li>${result}</li>`;
  if (result === numberSides){
    break;
  }
}
document.querySelector('#result').innerHTML = print;