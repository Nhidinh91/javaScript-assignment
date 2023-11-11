'use strict';
function calculateProbability(numberDice, sum){
  let count = 0;
  for (let no = 1; no <= 10000; no++) {
    let sumRoll = 0;
    for (let dice = 1; dice <= numberDice; dice++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      sumRoll += roll;
    }
    if (sumRoll === sum) {
      count++;
    }
  }
  return (count/10000*100);
}
let numberDice = parseInt(prompt('Input the number of dices:'));
let sum = parseInt(prompt('Input the sum of the number of eyes in total:'));
document.querySelector('#result').innerHTML = `Probality to get sum ${sum} with ${numberDice} dice is ${calculateProbability(numberDice, sum).toFixed(2)}%`