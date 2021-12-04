const reveals = document.getElementsByClassName('reveal');

document.addEventListener('scroll', () => {
    for (let reveal of reveals) {
        if (reveal) {
            const top = reveal.getBoundingClientRect().top;
            const viewPort = window.innerHeight;
            (top < viewPort) ? reveal.classList.add('reveal_active') : reveal.classList.remove('reveal_active');
        }
    }
});