let name = prompt('What is your name?')
let roll = Math.floor(Math.random()*4)+1;
if (roll == 1) {
  document.querySelector('#result').innerHTML = `${name}, you are a Gryffindor`;
}
if (roll == 2) {
  document.querySelector('#result').innerHTML = `${name}, you are a Slytherin`;
}
if (roll == 3) {
  document.querySelector('#result').innerHTML = `${name}, you are a Hufflepuff`;
}
if (roll == 3) {
  document.querySelector('#result').innerHTML = `${name}, you are a Ravenclaw`;
}