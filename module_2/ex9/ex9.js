'use strict';
function even(arrayNum){
  let arrayEven = [];
  for (let i = 0; i < arrayNum.length; i++){
    if (arrayNum[i]%2 === 0){
      arrayEven.push(arrayNum[i]);
    }
  }
  return arrayEven;
}
let arrayNum = [1,2,5,7,6,8,10];
let arrayEven = even(arrayNum);
console.log(`Original array: ${arrayNum}`);
console.log(`New array: ${arrayEven}`);