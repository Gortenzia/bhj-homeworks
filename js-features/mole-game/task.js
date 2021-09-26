const winCounter = document.getElementById('dead');
const loozeCounter = document.getElementById('lost');


for (let i = 1; i < 10; i++) {
    hole = document.getElementById(String('hole' + i));
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            winCounter.textContent = Number(winCounter.textContent) + 1;
            if (winCounter.textContent === 10) alert('Победа!');
            if (winCounter.textContent === 10) winCounter.textContent = 0;

        } else {
            loozeCounter.textContent = Number(loozeCounter.textContent) + 1;
            if (loozeCounter.textContent === 5) alert('Вы проиграли!');
            if (loozeCounter.textContent === 5) loozeCounter.textContent = 0;
        }
    }
}
//Работает не верно.
