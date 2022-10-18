/* INIT */
let sprite = document.getElementById("sprite");
let spriteImg = document.getElementById("spriteImg");
let output = document.getElementById("output");
let spriterCoin = document.getElementById("spriteCoin");
let score = document.getElementById("score");
let levelCount = document.getElementById("level");
let uhr = document.getElementById("time");

let rightArrow = false;
let leftArrow = false;
let upArrow = false;
let downArrow = false;

let coinX;
let coinY;
let counter = 0;
let lvlCounter = 1;
let timer = 0;

let interval;

let coin = new Audio("./audio/collect.mp3");
let level = new Audio("./audio/level.mp3");
let win = new Audio("./audio/win.mp3");
let gameOver = new Audio("./audio/gameOver.mp3");
let hintergrundMusik = new Audio("./audio/hintergrund.mp3");

sprite.style.left = "200x"; // starting position
sprite.style.top = "100px"; // starting position
spriteImg.style.right = "0px"; // starting animation

let spriteImgNumber = 0; // current animation part of image

score.innerHTML = `Score:${counter}`;
levelCount.innerHTML = `Level:${lvlCounter}`;


/* EVENT LISTENER */
document.onkeydown = keyListener;
document.onkeyup = keyListenerUp;

function keyListenerUp(e) {
    if (e.keyCode == 37 ) { // leftArrow
        leftArrow = false;
    }
    if (e.keyCode == 38 ) { //upArrow

        upArrow = false;
    }
    if (e.keyCode == 39) { // rightArrow

        rightArrow = false;
    }
    if (e.keyCode == 40) { // downArrow

        downArrow = false;
    }
}

/* CHECK PRESSED KEY */
function keyListener(e) {
    console.log(e);
    if (!e) {
        e = window.event; //Internet Explorer
    }
    if (e.keyCode == 37) { // leftArrow
        leftArrow = true;
    }
    if (e.keyCode == 38) { //upArrow

        upArrow = true;
    }
    if (e.keyCode == 39 ) { // rightArrow

        rightArrow = true;
    }
    if (e.keyCode == 40 ) { // downArrow

        downArrow = true;
    }
}

/* MOVE SPRITE */
function moveSprite(dx, dy) {
    // current position
    let x = parseInt(sprite.style.left);
    let y = parseInt(sprite.style.top);

    // new position
    x += dx;
    y += dy;

    // assign new position
    sprite.style.left = x + "px";
    sprite.style.top = y + "px";

    let spriteLeftPx = sprite.style.left.split('px')[0];
    let coinLeftPx = spriteCoin.style.left.split('px')[0];
    let spriteTopPx = sprite.style.top.split('px')[0];
    let coinTopPx = spriteCoin.style.top.split('px')[0];

    let leftDistance = Math.abs(coinLeftPx - spriteLeftPx);
    let topDistance = Math.abs(coinTopPx - spriteTopPx);

    /* CHECK IF CHARACTER TOUCHES RING */
    if ((leftDistance <= 37.5 && topDistance <= 37.5)) {
        counter++;
        levelCount.innerHTML = "Level: " + lvlCounter;
        score.innerHTML = `Score: ${counter}`;
        coin.play();
        generateCoin();
        if(counter == 10){
            lvlCounter++;
            setTimeout(gameLoop, 24);
            level.play();
        }
        if(counter == 15){
            lvlCounter++;
            setTimeout(gameLoop, 28);
            level.play();
        }
        if(counter == 20){
            lvlCounter++;
            setTimeout(gameLoop, 32);
            level.play();
        }
        if(counter == 25){
            levelCount.innerHTML = `Congartulations!`
            score.innerHTML = `You Won!`
            win.play();
        }
    }
}
/* COIN */
function generateCoin() {
    // current position
    coinX = Math.floor(Math.round(Math.random() * 760 / 10) * 10);
    coinY = Math.floor(Math.round(Math.random() * 360 / 10) * 10);

    // assign new position
    spriterCoin.style.left = coinX + "px";
    spriterCoin.style.top = coinY + "px";
}

/* ANIMATE CHARACTER */
function animateCharacter() {
    if (spriteImgNumber < 6) { // new img position
        spriteImgNumber++;
        let x = parseInt(spriteImg.style.right);
        x += 34.1; // ANPASSEN!
        spriteImg.style.right = x + "px";
    }
    else { // cycle loop finished: back to start animation
        spriteImg.style.right = "0px";
        spriteImgNumber = 0;
    }
}

function countdown(){
    uhr.innerHTML = timer;
    timer++;
    if(counter == 25){
        clearInterval(interval);
        uhr.innerHTML = timer;
    } 
    if(timer >= 40){
        clearInterval(interval);
        uhr.innerHTML = timer;
        gameOver.play();
        levelCount.innerHTML = `Oh No!`;
        score.innerHTML = `You lost!`;
    }
}
interval = setInterval(countdown, 1000);
countdown();

function gameLoop() {
    if (upArrow) {
        if(sprite.offsetTop <= 0){
           
        }else{
            moveSprite(0, -6);
            animateCharacter();
        }
    }
    if (downArrow) {
        if(sprite.offsetTop >= 365){ //border unten
         
        }else{
            moveSprite(0, 6);
            animateCharacter();
        }
    }
    if (rightArrow) {
        if(sprite.offsetLeft >= 760){ //border right

        }else{
        moveSprite(6, 0);
        animateCharacter();
        }
    }
    if (leftArrow) {
        if(sprite.offsetLeft <= 0){

        }else{
        moveSprite(-6, 0);
        animateCharacter();
        }
    }
    setTimeout(gameLoop, 20);
    colisionCheck();
}

gameLoop();
generateCoin();
hintergrundMusik.play();