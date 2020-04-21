const addP1 = document.getElementById('player1Plus');
const subP1 = document.getElementById('player1Minus');
const addP2 = document.getElementById('player2Plus');
const subP2 = document.getElementById('player2Minus');
const content = document.getElementById('contentScoreboard')

window.addEventListener('load', setScroreboardPosition);
window.addEventListener('resize', setScroreboardPosition);

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

function setScroreboardPosition() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    content.style.position = 'absolute';
    content.style.left = ((width/2) - 235) + 'px';
    content.style.top = ((height/2) - 20) + 'px';
}