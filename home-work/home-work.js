"use strict"

let closeButton = document.getElementById('close');
let openButton = document.getElementById('open');
openButton.addEventListener('click', closeBlock);
closeButton.addEventListener('click', closeBlock);

function closeBlock(){
    document.querySelector('.home-work__container-close').toggleAttribute('hidden');
    openButton.toggleAttribute('hidden');
    closeButton.toggleAttribute('hidden');
   
}

