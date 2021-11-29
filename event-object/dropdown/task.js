function dropdownOnclick() {
    const dropdowns = Array.from(document.getElementsByClassName('dropdown__value'));
    const dropdownItems = Array.from(document.getElementsByClassName('dropdown__item'));
    const lists = Array.from(document.getElementsByClassName('dropdown__list'));

    for (let dropdown of dropdowns) {
        dropdown.addEventListener('click', function down() {
            for (let list of lists) {
                list.classList.toggle('dropdown__list_active');

                for (let dropdownItem of dropdownItems) {
                    dropdownItem.addEventListener('click', function changeText(event) {
                        dropdown.textContent = event.target.textContent;
                        //Event.preventDefault();
                        const links = Array.from(document.getElementsByClassName('dropdown__link'));
                        links.onclick = function (event) {
                            event.preventDefault();
                        }
                        event.preventDefault();
                    });
                }
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', dropdownOnclick);
