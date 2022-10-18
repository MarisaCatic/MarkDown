let gameMatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

let boxes = document.getElementsByClassName('matrix');
let isPlayer1 = true;

function setItem(id, i, j) {
    if (isPlayer1) {
        if ((document.getElementById(`${id}`).style.backgroundColor == 'lightblue') || (document.getElementById(`${id}`).style.backgroundColor == 'blue')) {

        } else {
            document.getElementById(`${id}`).style.backgroundColor = 'lightblue';
            isPlayer1 = false;
            gameMatrix[i][j] = 1;
        }
    } else {
        if ((document.getElementById(`${id}`).style.backgroundColor == 'lightblue') || (document.getElementById(`${id}`).style.backgroundColor == 'blue')) {

        } else {
            document.getElementById(`${id}`).style.backgroundColor = 'lavender';
            isPlayer1 = true;
            gameMatrix[i][j] = 10;
        }
    }

    checkWinner();
}

let winsPlayer1 = 0;
let winsPlayer2 = 0;

function checkWinner() {
    if (((gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2]) == 3) ||
        ((gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2]) == 3) ||
        ((gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2]) == 3) ||
        ((gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0]) == 3) ||
        ((gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1]) == 3) ||
        ((gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2]) == 3) ||
        ((gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2]) == 3) ||
        ((gameMatrix[2][0] + gameMatrix[1][1] + gameMatrix[0][2]) == 3)) {
        winsPlayer1++;

        for (let resetCounter = 0; resetCounter < boxes.length; resetCounter++) {
            boxes[resetCounter].style.backgroundColor = 'white';
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameMatrix[i][j] = -1;
            }
        }

    } else if (((gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2]) == 30) ||
        ((gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2]) == 30) ||
        ((gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2]) == 30) ||
        ((gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0]) == 30) ||
        ((gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1]) == 30) ||
        ((gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2]) == 30) ||
        ((gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2]) == 30) ||
        ((gameMatrix[2][0] + gameMatrix[1][1] + gameMatrix[0][2]) == 30)) {
        winsPlayer2++;

        for (let resetCounter = 0; resetCounter < boxes.length; resetCounter++) {
            boxes[resetCounter].style.backgroundColor = 'white';
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameMatrix[i][j] = -1;
            }
        }

    } else if ((gameMatrix[0][0] !== -1) && (gameMatrix[0][1] !== -1) && (gameMatrix[0][2] !== -1) &&
        (gameMatrix[1][0] !== -1) && (gameMatrix[1][1] !== -1) && (gameMatrix[1][2] !== -1) &&
        (gameMatrix[2][0] !== -1) && (gameMatrix[2][1] !== -1) && (gameMatrix[2][2] !== -1)) {

        for (let resetCounter = 0; resetCounter < boxes.length; resetCounter++) {
            boxes[resetCounter].style.backgroundColor = 'white';
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameMatrix[i][j] = -1;
            }
        }
    }

    document.getElementById('erg').innerHTML = `<p>${namePlayer1} won ${winsPlayer1} times | ${namePlayer2} won ${winsPlayer2} times</p>`;
}

function resetGame() {
    for (let resetCounter = 0; resetCounter < boxes.length; resetCounter++) {
        boxes[resetCounter].style.backgroundColor = 'white';
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameMatrix[i][j] = -1;
        }
    }
}

function resetScore() {
    winsPlayer1 = 0;
    winsPlayer2 = 0;
    document.getElementById('erg').innerHTML = `<p>${namePlayer1} won ${winsPlayer1} times | ${namePlayer2} won ${winsPlayer2} times</p>`;
}

let namePlayer1 = "Player 1";
let namePlayer2 = "Player 2";

function setNamePlayer1() {
    let namePath1 = document.getElementById('inputPlayer1');
    namePlayer1 = namePath1.value;
}

function setNamePlayer2() {
    let namePath2 = document.getElementById('inputPlayer2');
    namePlayer2 = namePath2.value;
}