const rotatorCases = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;
const rotator = () => {
    rotatorCases[index].classList.remove('rotator__case_active');
    index += 1;
    rotatorCases[index].classList.add('rotator__case_active');
    if (index === rotatorCases.length - 1) index = 0;
}
setInterval(rotator, 1000);

//Попытка сделать более сложную версию
for (let rotatorCase of rotatorCases) {
    for (let attr of rotatorCase.attributes) {
        console.log(`${attr.name} = ${attr.value}`);
        if (attr.dataset.color === 'red') {//Cannot read properties of undefined (reading 'color')
            this.span.color = 'red'; //Не верно, цвет не присваивает
        }
    }

}
document.addEventListener('DOMContentLoaded', rotator);