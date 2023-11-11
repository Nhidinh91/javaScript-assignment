'use strict';
let number_roll = parseInt(prompt('How many dices you want to roll?'));
let sum_roll = 0;
for (let no = 1; no <= number_roll; no++){
  let result = Math.floor(Math.random()*6)+1;
  sum_roll += result;
}
document.querySelector('#result').innerHTML = `The sum of the results = ${sum_roll}`;