import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import { Mousewheel, Keyboard } from 'swiper/modules';
// import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
function aboutMeInit() {
    new Accordion('.about-me .accordion-container', {
        showMultiple: true,
        openOnInit: [0],
    });

    var swiper = new Swiper('.about-me .about-swiper', {
        modules: [Mousewheel, Keyboard],

        // slidesPerView: 2, // Кількість слайдів, які видно одночасно
        slidesPerView: 'auto', // Кількість слайдів, які видно одночасно
        spaceBetween: 0, // Відступ між слайдами
        loop: true, // Безкінечна прокрутка
        updateOnWindowResize: true,

        mousewheel: {
            invert: false,
        },
        navigation: {
            nextEl: '.about-me .about-swiper .next',
            preventClicks: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
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
aboutMeInit();
