'use strict';
const button = document.querySelector('button');
function popup(e){
  alert('Button Clicked');
}
button.addEventListener('click', popup);