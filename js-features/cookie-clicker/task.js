const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function changeSizes() {
    cookie.width = 300;
    cookie.height = 200;
    counter.textContent = + 1;
    //каждый следующий клик должен уменьшать ширину/высоту , но при этом прибавлять счетчик
    //Срабатывает лишь один раз.
}

