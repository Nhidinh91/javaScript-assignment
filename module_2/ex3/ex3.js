'use strict';
function listDog(){
  let list = []
  for (let no = 1; no <= 6; no++){
    let dog = prompt('Input a name of a dog');
    if(!(list.includes(dog))){
      list.push(dog);
    }
  }
  return list;
}
function printDog(listDog){
  listDog.sort();
  let print = "";
  for (let i = 5; i >=0; i--){
    print += `<li>${listDog[i]}</li>`;
  }
  return print;
}

let list = listDog();
let print = printDog(list);
document.querySelector('#result').innerHTML = print;