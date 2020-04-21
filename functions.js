    const addP1 = document.getElementById('player1Plus');
    const subP1 = document.getElementById('player1Minus');
    const addP2 = document.getElementById('player2Plus');
    const subP2 = document.getElementById('player2Minus');
    const content = document.getElementById('contentScoreboard')

    window.addEventListener('load', setPlayer1Name);
    window.addEventListener('load', setPlayer2Name);
    window.addEventListener('load', setScroreboardPosition);
    window.addEventListener('resize', setScroreboardPosition);

    addP1.addEventListener('click', add);
    addP2.addEventListener('click', add);
    subP1.addEventListener('click', sub);
    subP2.addEventListener('click', sub);

    var scoreP1 = 0;
    var scoreP2 = 0;

    function add() {
        if(this == addP1) {
            scoreP1++;
            var placarP1 = document.getElementById('player1Scoreboard');
            placarP1.innerHTML = scoreP1;
        }
        else if(this == addP2) {
            scoreP2++;
            var placarP2 = document.getElementById('player2Scoreboard');
            placarP2.innerHTML = scoreP2;
        }
    }

    function sub() {
        if(this == subP1) {
            scoreP1--;
            scoreP1 = checkValue(scoreP1);
            var placarP1 = document.getElementById('player1Scoreboard');
            placarP1.innerHTML = scoreP1;
        }
        else if (this == subP2) {
            scoreP2--;
            scoreP2 = checkValue(scoreP2);
            var placarP2 = document.getElementById('player2Scoreboard');
            placarP2.innerHTML = scoreP2;
        }
    }

    function setScroreboardPosition() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        content.style.position = 'absolute';
        content.style.left = ((width/2) - 235) + 'px';
        content.style.top = ((height/2) - 20) + 'px';
    }

    function setPlayer1Name() {
        var name = document.getElementById('labelP1');
        var p1Name = prompt('Enter with the Player 1 name:');
        p1Name ? name.innerHTML = p1Name : name.innerHTML = "Player 1";
    }

    function setPlayer2Name() {
        var name = document.getElementById('labelP2');
        var p2Name = prompt('Enter with the Player 2 name:');
        p2Name ? name.innerHTML = p2Name : name.innerHTML = "Player 2";
    }

    function checkValue(score) {
        if(score < 0) return 0;
        else return score
    }