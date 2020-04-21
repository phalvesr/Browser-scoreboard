const addP1 = document.getElementById('player1Plus');
const subP1 = document.getElementById('player1Minus');
const addP2 = document.getElementById('player2Plus');
const subP2 = document.getElementById('player2Minus');

addP1.addEventListener('click', add);
addP2.addEventListener('click', add);
subP1.addEventListener('click', sub);
subP2.addEventListener('click', sub);

function add() {
    alert('Added!');
}

function sub() {
    alert('Subed!');
}