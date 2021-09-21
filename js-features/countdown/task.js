const decreasTime = function () {
    const timerElement = document.getElementById("timer");
    timerElement.textContent -= 1;
    if (timerElement.textContent <= 0) clearInterval(intervalID);
    if (timerElement.textContent <= 0) alert('Вы победили в конкурсе!');
}
const intervalID = setInterval(decreasTime, 1000);

