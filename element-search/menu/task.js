
const ready = () => {
    const subMenus = document.getElementsByClassName('menu_sub');
    for (let subMenu of subMenus) {
        const link = subMenu.closest('.menu__item').querySelector('.menu__link');
        link.onclick = () => {
            subMenu.classList.toggle('menu_active');
            return false;
        };
    }
};
document.addEventListener('DOMContentLoaded', ready);
