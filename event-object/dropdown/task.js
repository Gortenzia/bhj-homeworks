//const dropdownOnclick = () => {
const dropdowns = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownItems = Array.from(document.getElementsByClassName('dropdown__item'));
const lists = Array.from(document.getElementsByClassName('dropdown__list'));

for (let dropdown of dropdowns) {
    dropdown.addEventListener('click', function down() {
        for (let list of lists) {
            list.classList.toggle('dropdown__list_active');
            const links = document.getElementsByClassName('dropdown__link');

            for (let dropdownItem of dropdownItems) {
                dropdownItem.addEventListener('click', function changeText() {
                    dropdown.textContent = dropdownItem.textContent;
                    if (Event.currentTarget < links) Event.preventDefault();
                })


            }
        }
    })
}
//}
//document.addEventListener('DOMContentLoaded', dropdownOnclick);

 //EventTarget -
 //event.currentTarget
 //event.target - 