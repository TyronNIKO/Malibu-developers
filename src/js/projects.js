

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Mousewheel, Keyboard],
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: {
      
    },

    1440: {
      direction: 'horizontal',
    },
  },

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    preventClicks: false,
  },
  
  // reachBeginning: document.querySelector('swiper-button-prev').disabled = true,
  //reachEnd: document.querySelector('swiper-button-next').classList.add('.disabled'), 
  
});












 //const theSwiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like


/* refs.rightButton.addEventListener('click', () => {
    theSwiper.slideNext()
    
})
refs.leftButton.addEventListener('click', () => {
    theSwiper.slidePrev()
}) */
