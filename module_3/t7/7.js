'use strict';
const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');
const oldPic = 'img/picA.jpg';
const newPic = 'img/picB.jpg';

trigger.addEventListener('mouseover', ()=> {
  target.src = newPic;
});
trigger.addEventListener('mouseout', ()=> {
  target.src = oldPic;
})