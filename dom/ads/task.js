//Необходимо реализовать механизм смены текстовых объявлений. Каждое объявление меняется через 1 секунду.
//Для того, чтобы задать текстовый элемент активным, установите у него класс rotator__case_active
//Каждую секунду меняйте класс с одного элемента на другой


const rotatorCases = Array.from(document.getElementsByClassName('rotator__case'));
let len = rotatorCases.length;
let intervalCounter = 1;

const addActive = () => {
    for (let rotatorCase of rotatorCases) {
        intervalCounter++;
        if (intervalCounter > len) {
            intervalCounter = 1;
            rotatorCase.classList.add('rotator__case_active');
        }
    }
}
setInterval(addActive(), 1000);
//Добавить каждому спану свой интервал через setInterval(rotatorCases[0].addActive(), 1000); и тд
//фунция должна добавлять активность выбраному спану, ждать и убирать
//активность, затем передавать активность следующему спану, когда будет достигнута rotatorCases.length -1, переместиться снова к первому элементу, типа слайдера но со спанами

const removeActive = () => {
    for (let rotatorCase of rotatorCases) {
        intervalCounter++;
        if (intervalCounter > len && rotatorCase.classList.contains('rotator__case_active')) {
            intervalCounter = 1;
            rotatorCase.classList.remove('rotator__case_active');
        }
    }
}
setInterval(removeActive(), 2000);

document.addEventListener('DOMContentLoaded', addActive);
document.addEventListener('DOMContentLoaded', removeActive);
