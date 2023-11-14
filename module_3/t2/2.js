'use strict';
const ul = document.querySelector('#target');

const t1 = document.createTextNode('First item');
const t2 = document.createTextNode('Second item');
const t3 = document.createTextNode('Third item');
const li1 = document.createElement('li');
li1.appendChild(t1);
const li2= document.createElement('li');
li2.appendChild(t2);
li2.setAttribute('id', 'test2')
const li3 = document.createElement('li');
li3.appendChild(t3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.getElementById ('test2').classList.toggle('my-item');