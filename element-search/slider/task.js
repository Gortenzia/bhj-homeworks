
const slides = document.querySelectorAll('.slider__item');
const nextArrow = document.querySelector('.slider__arrow_next')
const previousArrow = document.querySelector('.slider__arrow_prev');

let index = 0;

const activeSlide = (n) => {
    for (let slide of slides) {
        slide.classList.remove('slider__item_active')
    }
    slides[n].classList.toggle('slider__item_active');
}

previousArrow.addEventListener('click', function () {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
});

nextArrow.addEventListener('click', function () {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
});

