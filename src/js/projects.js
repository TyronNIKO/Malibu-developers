import Swiper from 'swiper';
import { Keyboard, Mousewheel } from 'swiper/modules';

// init Swiper:
function projectsInit() {
    const swiper = new Swiper('.projects .projects-swiper', {
        modules: [Mousewheel, Keyboard],
        updateOnWindowResize: true,
        spaceBetween: 20,
        mousewheel: {
            invert: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
            prevEl: '.projects .projects-swiper .prev',
            nextEl: '.projects .projects-swiper .next',
            preventClicks: false,
        },
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            if (event.shiftKey) {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    });
}
projectsInit();
