    const addP1     = document.getElementById('player1Plus');
    const subP1     = document.getElementById('player1Minus');
    const addP2     = document.getElementById('player2Plus');
    const subP2     = document.getElementById('player2Minus');
    const content   = document.getElementById('contentScoreboard');
    const autoClear = document.getElementsByName('autoClearButton')[0];

    window.addEventListener('load', setPlayer1Name);
    window.addEventListener('load', setPlayer2Name);
    window.addEventListener('load', setScroreboardPosition);
    window.addEventListener('resize', setScroreboardPosition);

    addP1.addEventListener('click', add);
    addP2.addEventListener('click', add);
    subP1.addEventListener('click', sub);
    subP2.addEventListener('click', sub);
    autoClear.addEventListener('click', resetScore)

    var scoreP1 = 0;
    var scoreP2 = 0;

    function add() {
        if(this == addP1) {
            scoreP1++;
            refreshValues();
        }
        else if(this == addP2) {
            scoreP2++;
            refreshValues();
        }
    }

    function sub() {
        if(this == subP1) {
            scoreP1--;
            scoreP1 = checkValue(scoreP1);
            refreshValues();
        }
        else if (this == subP2) {
            scoreP2--;
            scoreP2 = checkValue(scoreP2);
            refreshValues();
        }
    }

    function setScroreboardPosition() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        content.style.position = 'absolute';
        content.style.left = ((width/2) - 235) + 'px';
        content.style.top = ((height/2) - 20) + 'px';
        autoClear.style.position = 'absolute';
        autoClear.style.left = ((width/2) - 49) + 'px'
        autoClear.style.top = '60%';
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

    function resetScore() {
        scoreP1 = 0;
        scoreP2 = 0;
        refreshValues();
    }

    function refreshValues() {
        var placarP1 = document.getElementById('player1Scoreboard');
        var placarP2 = document.getElementById('player2Scoreboard');
        placarP1.innerHTML = scoreP1;
        placarP2.innerHTML = scoreP2;
    }