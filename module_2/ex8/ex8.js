'use strict';

function concat(arrayString){
  let string = [];
  for (let i = 0; i < arrayString.length; i++){
    string += arrayString[i];
  }
  return string;
}
let arrayString = ['Meo','Love','Fish'];
document.querySelector('#result').innerHTML = concat(arrayString);