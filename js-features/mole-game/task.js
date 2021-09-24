const winCounter = document.getElementById('dead');
const loozeCounter = document.getElementById('lost');
const holeGame = document.getElementsByClassName('hole-game');

for (let hole of holeGame) {
    hole = getHole = index => document.getElementById(`hole${index}`),
        hole.classList.contains('hole_has-mole') ? winCounter.textContent += 1 : loozeCounter.textContent += 1;
}//undefined

if (winCounter.textContent === 10) alert('Победа!');
if (loozeCounter.textContent === 5) alert('Вы проиграли!');