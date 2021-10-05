function slider() {
    const sliderItem = document.querySelectorAll('.slider__item');
    const rightArrow = document.querySelector('.slider__arrow_next')
    const leftArrow = document.querySelector('.slider__arrow_prev');

    let index = 0;

    const activeSlider = () => {
        for (let slide of sliderItem) {
            slide.classList.toggle('slider__item_active')
        }
    };

    const next = () => {
        (index === sliderItem.length - 1) ? index = 0 : (index += 1);
        activeSlider(index)
    }

    const prev = () => {
        (index === 0) ? index = sliderItem.length - 1 : (index -= 1);
        activeSlider(index)
    };

    rightArrow.onclick = () => {
        next();
        return false;
    }

    leftArrow.onclick = () => {
        prev();
        return false;
    }
};

slider();

