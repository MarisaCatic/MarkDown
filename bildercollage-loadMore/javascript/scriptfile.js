let counter = 1;
backgorund.style.backgroundImage = `url("./img/background.jpeg")`;

function addRow() {
    if(counter < 15) {
        for (let i = counter; i < counter+3; i++) {
            document.getElementById(`main`).innerHTML += `<img src="./img/city%20(${i}).jpg">`

        }
        counter +=3;
    }

    if(counter >= 15) {
        document.getElementById(`button`).innerHTML = `<h2>You´ve reached the end</h2>`
    }
}
