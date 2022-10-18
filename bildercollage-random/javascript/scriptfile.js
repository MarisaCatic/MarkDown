let imgCount = 1;
backgorund.style.backgroundImage = `url("./img/background.jpeg")`;

function addRow() {
    for (let i = imgCount; i < imgCount + 3; i++) {
        document.getElementById(`main`).innerHTML += `<img src="https://picsum.photos/500/200?random=${i}">`
    }
    imgCount += 3;
}
