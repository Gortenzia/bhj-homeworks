function menuLinks() {
    const menuMain = document.querySelectorAll('ul.menu_main');

    for (let item of menuMain) {
        const menuSub = item.querySelectorAll('ul.menu_sub');
        const mainLink = item.querySelectorAll('li.menu__item');
        const linkArr = Array.from(mainLink);
        linkArr[0].onclick = function () {
            return false;
        }
        linkArr[3].onclick = function () {
            return false;
        }

        for (let sub of menuSub) {
            const subLink = sub.closest('li.menu__item').querySelector('a.menu__link');


            subLink.onclick = () => {
                if (sub.classList.contains('menu_active')) {
                    sub.classList.remove('menu_active');
                    return false;
                }
                const menuActive = item.querySelector('.menu_active');
                if (menuActive) {
                    menuActive.classList.remove('menu_active');
                }
                sub.classList.add('menu_active');
                return false;

            }
        }
    }
}
