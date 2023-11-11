'use strict';

function rollDice(){
  return Math.floor(Math.random()*6)+1;
}
let result = null;
let print = '';
while (true){
  result = rollDice();
  print += `<li>${result}</li>`;
  if (result === 6){
    break;
  }
}
document.querySelector('#result').innerHTML = print;