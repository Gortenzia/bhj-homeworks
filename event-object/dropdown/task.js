const dropdowns = Array.from(document.getElementsByClassName('dropdown__value'));

for (let dropdown of dropdowns) {
    const dropdownActiveItem = dropdown.classList.contains('dropdown__item');
    if (dropdownActiveItem) dropdownActiveItem.classList.toggle('dropdown__list_active');
}


//В элементе с классом dropdown__value содержится выбранное значение.
//Для того, чтобы открыть меню, требуется проставить класс dropdown__list_active: