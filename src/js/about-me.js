import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';

new Accordion('.about-accordion-container');

var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto', // Кількість слайдів, які видно одночасно
  spaceBetween: 20, // Відступ між слайдами
  loop: true, // Безкінечна прокрутка
  pagination: {
    el: '.swiper-pagination', // Елемент для пагінації
    clickable: true, // Можливість клікати на пагінаційні точки
  },
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "Вперед"
    prevEl: '.swiper-button-prev', // Кнопка "Назад"
  },
  keyboard: {
    enabled: true, // Взаємодія з клавіатурою
  },
});
