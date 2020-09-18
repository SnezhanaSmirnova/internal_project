"use strict"
window.onload = function () {
let addBtn = document.getElementById('add-more');


let table = document.getElementById('table');
addBtn.addEventListener('click', addSring);

function addSring(){
    let str = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.innerHTML = '<input type="date">';

    let cell2 = document.createElement('td');
    cell2.innerHTML = '<input type="number">';

    let cell3 = document.createElement('td');
    cell3.innerHTML = '<input type="number">';

    let cell4 = document.createElement('td');
    cell4.innerHTML = '<input type="number">';

    str.append(cell1);
    str.append(cell2);
    str.append(cell3);
    str.append(cell4);

    table.append(str);
}


}