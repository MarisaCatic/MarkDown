let temp = "";
let images = document.getElementsByClassName("test");

function slideleft(){
    temp = images[4].src;
    images[4].src = images[3].src;
    images[3].src = images[2].src;
    images[2].src = images[1].src;
    images[1].src = images[0].src;
    images[0].src = temp;
}
function slideright(){
    temp = images[0].src;
    images[0].src = images[1].src;
    images[1].src = images[2].src;
    images[2].src = images[3].src;
    images[3].src = images[4].src;
    images[4].src = temp;
}