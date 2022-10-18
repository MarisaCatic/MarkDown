//scores
let score1 = 0;
let score2 = 0;

let resultPlayer1;
let resultPlayer2;
let winner;
let hasValidDice1 = true;
let hasValidDice2 = true;

let username1
let username2

function saveName1(){
    username1 = document.getElementById('inputName1').value 
}
function saveName2(){
    username2 = document.getElementById('inputName2').value
}

//random Number
function newDice() {
    return Math.floor(Math.random()*6) + 1;
}


function checkPlayer1() {
    while(hasValidDice1 == true){
        document.getElementById('outputName1').innerHTML = username1;
        resultPlayer1 = newDice();
        document.getElementById(`dice1`).innerHTML = `<img src="images/PinClipart_cube_${resultPlayer1}.png">`
        hasValidDice1 = false;
    }

}

function checkPlayer2() {
    while(hasValidDice2 == true){
        document.getElementById(`outputName2`).innerHTML = username2;
        resultPlayer2 = newDice();
        document.getElementById(`dice2`).innerHTML = `<img src="images/PinClipart_cube_${resultPlayer2}.png">`
        hasValidDice2 = false;
        checkWinner();
    }

}

function checkWinner(payer1,player2) {
    if(resultPlayer1 > resultPlayer2){
        score1++;
        winner = username1
    } else if(resultPlayer1 < resultPlayer2){
        score2++;
        winner = username2
    } else{
        winner = `Nobody`
    }

    document.getElementById('result').innerHTML = `<p>${username1}: ${score1}</p>`;
    document.getElementById('result').innerHTML += `<p>${username2}: ${score2}</p>`;
    document.getElementById('result').innerHTML += `<p>${winner} won </p>`;

}

function newGame() {
    document.getElementById(`outputName1`).innerHTML = ``;
    document.getElementById(`outputName2`).innerHTML = ``;
    document.getElementById(`result`).innerHTML = ``;
    winner = ``;
    document.getElementById(`dice1`).innerHTML = ``;
    document.getElementById(`dice2`).innerHTML = ``;
    hasValidDice1 = true;
    hasValidDice2 = true;

}
