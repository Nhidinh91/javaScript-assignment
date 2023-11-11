'use strict';
let listNum = [];
while (true){
  let number = parseFloat(prompt('Input a number'));
  if (number === 0){
    break;
  }
  listNum.push(number);
}
listNum.sort((a, b) => b - a);
for (let no = 0; no < listNum.length; no++){
  console.log(listNum[no]);
}