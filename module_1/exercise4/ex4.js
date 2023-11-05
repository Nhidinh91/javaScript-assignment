let name = prompt('What is your name?')
let roll = Math.floor(Math.random()*4)+1;
if (roll == 1) {
  document.querySelector('#result').innerHTML = `${name}, you are a Gryffindor`;
}
else if (roll == 2) {
  document.querySelector('#result').innerHTML = `${name}, you are a Slytherin`;
}
else if (roll == 3) {
  document.querySelector('#result').innerHTML = `${name}, you are a Hufflepuff`;
}
else if (roll == 4) {
  document.querySelector('#result').innerHTML = `${name}, you are a Ravenclaw`;
}