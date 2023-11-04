let number1 = parseFloat(prompt('Input first number:'));
let number2 = parseFloat(prompt('Input 2nd number:'));
let number3 = parseFloat(prompt('Input 3rd number:'));
sum_total = number1 + number2 + number3;
product = number1 * number2 * number3;
average = sum_total/3
document.querySelector('#result').innerHTML =  `The sum = ${sum_total}<br>
 The product = ${product}<br>
 The average = ${average.toFixed(2)}`;