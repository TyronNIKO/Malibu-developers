import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

new Accordion('.about-accordion-container', {
  showMultiple: true,
});

// var swiper = new Swiper('.about-swiper', {
//   modules: [Navigation],
//   slidesPerView: 2, // Кількість слайдів, які видно одночасно
//   spaceBetween: 0, // Відступ між слайдами
//   loop: true, // Безкінечна прокрутка
//   navigation: {
//     nextEl: '.swiper-button-next', // Кнопка "Вперед"
//   },
//   keyboard: {
//     enabled: true, // Взаємодія з клавіатурою
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 6,
//     },
//   },
// });
