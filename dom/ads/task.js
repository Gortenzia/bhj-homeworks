const rotatorCases = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;
const rotator = () => {
    rotatorCases[index].classList.remove('rotator__case_active');
    index += 1;
    rotatorCases[index].classList.add('rotator__case_active');
    const color = rotatorCases[index].dataset.color;
    rotatorCases[index].style.color = color;
    const speed = rotatorCases[index].dataset.speed;
    rotatorCases[index].style.speed = speed;
    if (index === rotatorCases.length - 1) index = 0;
}
setInterval(rotator, 1000);

//Попытка сделать более сложную версию
//for (let rotatorCase of rotatorCases) {
//for (let attr of rotatorCase.attributes) {
// console.log(`${attr.name} = ${attr.value}`);
// if (this.attr.dataset.color === 'red') {//Cannot read properties of undefined (reading 'color')
//   this.rotatorCase.style.color = 'red'; //Не верно, цвет не присваивает
//}
// }
//let computedStyle = getComputedStyle(document.rotatorCase);
//console.log(computedStyle.dataColor);

//}
document.addEventListener('DOMContentLoaded', rotator);