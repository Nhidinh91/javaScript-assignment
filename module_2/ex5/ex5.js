'use strict';

let listNum = [];

while (true){
  let number = parseFloat(prompt('Input a number'));
  if (listNum.includes(number)){
    break;
  }
  listNum.push(number);
}

listNum.sort()
for (let no = 0; no < listNum.length; no++){
  console.log(listNum[no]);
}