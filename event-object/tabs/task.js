const tabElements = Array.from(document.getElementsByClassName('tab'));
let tabElementMain = tabElements[0];
let tabElementAbout = tabElements[1];
let tabElementContakts = tabElements[2];

const tabContentElements = Array.from(document.getElementsByClassName('tab__content'));
let tabContentMain = tabContentElements[0];
let tabContentAbout = tabContentElements[1];
let tabContentContakts = tabContentElements[2];

tabElementMain.onclick = () => {
    tabElementAbout.classList.remove('tab_active');
    tabContentAbout.classList.remove('tab__content_active');
    tabElementContakts.classList.remove('tab_active');
    tabContentContakts.classList.remove('tab__content_active');
    tabElementMain.classList.add('tab_active');
    tabContentMain.classList.add('tab__content_active');

}

tabElementAbout.onclick = () => {
    tabElementMain.classList.remove('tab_active');
    tabContentMain.classList.remove('tab__content_active');
    tabElementContakts.classList.remove('tab_active');
    tabContentContakts.classList.remove('tab__content_active');
    tabElementAbout.classList.add('tab_active');
    tabContentAbout.classList.add('tab__content_active');
}

tabElementContakts.onclick = () => {
    tabElementMain.classList.remove('tab_active');
    tabContentMain.classList.remove('tab__content_active');
    tabElementAbout.classList.remove('tab_active');
    tabContentAbout.classList.remove('tab__content_active');
    tabElementContakts.classList.add('tab_active');
    tabContentContakts.classList.add('tab__content_active');
}

