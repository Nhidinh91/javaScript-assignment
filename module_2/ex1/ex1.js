let numbers = [];
for (let no = 1; no <= 5; no++){
  numbers.push(prompt('Input a number:'));
}
for ( let i = 4; i >= 0; i--){
  console.log(numbers[i]);
}