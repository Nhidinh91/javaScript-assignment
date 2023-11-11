function storeCandidate(numberCandidate){
  let listCandidate = [];
  for (let no = 1; no <= numberCandidate; no++){
    let eachCandidate = {};
    let name = prompt(`Name for candidate ${no}`);
    eachCandidate = {'name':name,
                      'votes':0}
    listCandidate.push(eachCandidate);
  }
  return listCandidate;
}
function vote(numberVoters, listCandidate){
  console.log(numberVoters, listCandidate)
  for (let no = 1; no <= numberVoters; no++){
    let vote = prompt("Input the candidate's name you want to vote");
    for (let i = 0; i < listCandidate.length; i++){
      if (vote === listCandidate[i]['name']){
        listCandidate[i]['votes'] += 1;
      }
    }
  }
  return listCandidate;
}
let numberCandidate = parseInt(prompt('Input the number of candidates'));
let numberVoters = parseInt(prompt('Input the number of voters'));
let listCandidate = storeCandidate(numberCandidate);
listCandidate = vote(numberVoters, listCandidate);

listCandidate.sort((a, b) => b.votes - a.votes);
console.log(`The winner is ${listCandidate[0]['name']} with ${listCandidate[0]['votes']} votes`);
console.log('Results:');
for (let i = 0; i < listCandidate.length; i++){
  console.log(`${listCandidate[i]['name']}: ${listCandidate[i]['votes']} votes`);
}


