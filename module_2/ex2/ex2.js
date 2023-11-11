'use strict';
function listParticipants(numberParticipant){
  let list = []
  for (let no = 1; no <= numberParticipant; no++){
    let participant = prompt('Input a participants');
    if(!(participant in list)){
      list.push(participant);
    }
  }
  return list;
}
function printParticipants(listParticipants){
  listParticipants.sort();
  let print = "";
  for (let i = 0; i< listParticipants.length; i++){
    print += `<li>${listParticipants[i]}</li>`;
  }
  return print;
}
let numberParticipant = parseInt(prompt('Input the number of participants'));
let listParticipant = listParticipants(numberParticipant);
let print = printParticipants(listParticipant);
document.querySelector('#result').innerHTML = print;