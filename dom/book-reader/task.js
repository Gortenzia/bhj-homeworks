const fonts = () => {
    const fontLinks = Array.from(document.getElementsByClassName('font-size'));
    const smallFontLink = fontLinks[0];
    const midlFontLink = fontLinks[1];
    const bigFontLink = fontLinks[2];
    const book = document.getElementById('book');

    smallFontLink.onclick = function (event) {
        bigFontLink.classList.remove('font-size_active');
        midlFontLink.classList.remove('font-size_active');
        smallFontLink.classList.add('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs - small'); //выдает мимолетную ошибку
        event.preventDefault();
    }

    midlFontLink.onclick = function (event) {
        bigFontLink.classList.remove('font-size_active');
        smallFontLink.classList.remove('font-size_active');
        midlFontLink.classList.add('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs - small');
        event.preventDefault();
    }

    bigFontLink.onclick = function (event) {
        midlFontLink.classList.remove('font-size_active');
        smallFontLink.classList.remove('font-size_active');
        bigFontLink.classList.add('font-size_active');

        book.classList.add('book_fs-big');
        event.preventDefault();
    }
}

const textColors = Array.from(document.getElementsByClassName('color'))
const blackColor = textColors[0];
const grayColor = textColors[1];
const whitesmokeColor = textColors[2];

blackColor.onclick = function (event) {
    blackColor.classList.add('color_active');
    book.classList.remove('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
    book.classList.add('book_color-black');
    event.preventDefault();
}

grayColor.onclick = function (event) {
    grayColor.classList.add('color_active');
    book.classList.remove('book_color-black');
    book.classList.remove('book_color-whitesmoke');
    book.classList.add('book_color-gray');
    event.preventDefault();
}

whitesmokeColor.onclick = function (event) {
    whitesmokeColor.classList.add('color_active');
    book.classList.remove('book_color-black');
    book.classList.remove('book_color-gray');
    book.classList.add('book_color-whitesmoke');
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', fonts)