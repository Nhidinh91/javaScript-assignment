'use strict';

const names = ['John', 'Paul', 'Jones'];
const ul = document.querySelector('#target');
for (let name of names){
  let li = document.createElement('li');
  li.innerHTML = name;
  ul.appendChild(li);
}
