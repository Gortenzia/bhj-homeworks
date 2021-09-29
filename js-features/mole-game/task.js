const winCounter = document.getElementById('dead');
const loozeCounter = document.getElementById('lost');
const holeGame = document.getElementsByClassName('hole-game');
const holes = Array.from(document.getElementsByClassName('hole'));


for (let hole of holes) {
    hole.addEventListener("click", function () {
        if (hole.classList.contains('hole_has-mole')) {
            winCounter.textContent = Number(winCounter.textContent) + 1;
            if (winCounter.textContent === '10') alert('Победа!');
        } else {
            loozeCounter.textContent = Number(loozeCounter.textContent) + 1;
            if (loozeCounter.textContent === '5') alert('Вы проиграли!');
        }
        if (winCounter.textContent === '10' || loozeCounter.textContent === '5') {
            Number(winCounter.textContent = 0);
            Number(loozeCounter.textContent = 0);
        }

    });
}
