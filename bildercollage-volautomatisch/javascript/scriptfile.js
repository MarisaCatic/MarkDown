function loadImages() {
    for (let i = 1; i <= 15; i++) {
        document.getElementById(`main`).innerHTML += `<img id="img${i}" src="./img/city%20(${i}).jpg">`
    }
}
loadImages();