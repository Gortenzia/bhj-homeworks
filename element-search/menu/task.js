const ready = () => {
    const menus = document.getElementsByClassName('menu_main');

    for (let menu of menus) {
        const subMenus = menu.getElementsByClassName('menu_sub');

        for (let subMenu of subMenus) {
            const link = subMenu.closest('.menu__item').querySelector('.menu__link');
            link.onclick = () => {
                if (subMenu.classList.contains('menu_active')) {
                    subMenu.classList.toggle('menu_active');
                    return false;
                }
                subMenu.classList.toggle('menu_active');
                return false;
            };
        }
    }
};

document.addEventListener('DOMContentLoaded', ready);
//Реализация дополнительного задания пока не планируется