const modalWindow = document.getElementsByClassName('modal');
let arrOfModal = Array.from(modalWindow);
let modalMain = arrOfModal[0];
let modalSuccess = arrOfModal[1];
console.log(modalMain)

const closeButtons = document.getElementsByClassName('modal__close_times');
let arrOfModalClose = Array.from(closeButtons);


function showMainModal() {
    modalMain.classList.add('modal_active');
}
window.onload = showMainModal();

for (let closeButton of closeButtons) {
    closeButton.onclick = function () {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
}


const showSuccessModalButton = document.getElementsByClassName('btn_danger');
console.log(showSuccessModalButton[0])

showSuccessModalButton[0].onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

