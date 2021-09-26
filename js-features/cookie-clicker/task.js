const cookie = document.getElementById("cookie");

cookie.onclick = function changeSizes() {
    cookie.width === 200 ? cookie.width = 300 : cookie.width = 200;
    const textCounter = document.getElementById("clicker__counter");
    textCounter.textContent = Number(textCounter.textContent) + 1;
}

