'use strict';

let p = `<li>First item</li>
                <li>Second item</li>
                <li>Third item</li>`;
document.querySelector('#target').innerHTML = p;
document.querySelector('#target').classList.toggle('my-list');