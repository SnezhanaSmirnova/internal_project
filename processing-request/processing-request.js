'use strict'

let button = document.querySelectorAll('.main__request-status-circle');
button.forEach(b=>b.addEventListener('click', showMassage));

let container = document.querySelector('.main__request-status-container');
let status_green = document.querySelector('.status-green');
let status_yellow = document.querySelector('.status-yellow');
let status_red = document.querySelector('.status-red');


function showMassage (e){
    let place = e.target;
    console.log(place);
    container.removeAttribute('hidden');
    
    status_green.addEventListener('click', addGreen);
    status_red.addEventListener('click', addRed);
    status_yellow.addEventListener('click', addYellow);
    function addGreen (){
        place.removeAttribute('.main__request-status-circle-green');
        // place.style.background = 'green';
        container.toggleAttribute('hidden');
    
    }
    function addYellow (){
        // place.style.background = 'yellow';
        container.toggleAttribute('hidden');
    
    }
    function addRed (){
        // place.style.background = 'red';
        container.toggleAttribute('hidden');
    
    }
    
   
}
