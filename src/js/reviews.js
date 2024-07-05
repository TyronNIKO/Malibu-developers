import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiperReviews = new Swiper('.reviews-wrapper', {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  updateOnWindowResize: true,
  slidesPerView: 1,
  enabled: true,
  swipeHandler: '.reviews-item',
  speed: 300,
  spaceBetween: 20,
  height: 302,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },

    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
  },

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
    preventClicks: false,
  },
});

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/reviews';

const url = `${BASE_URL}${END_POINT}`;
let currentId = 1;

const selectors = {
  container: document.querySelector('.reviews-list'),
  btnPrev: document.querySelector('.swiper-button-prev'),
  btnNext: document.querySelector('.swiper-button-next'),
};

async function fetchReviews(id) {
  try {
    const response = await axios.get(url, { params: { id } });

    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Fetching reviews failed: ${error.message}`);
  }
}

const renderReviews = async () => {
  try {
    const reviews = await fetchReviews(currentId);
    const markup = reviews
      .map(
        ({ _id, author, avatar_url, review }) => `
  <div class="swiper-slide">
  <li class="reviews-item " data="${_id}">
  <img class="reviews-img" src="${avatar_url}" alt="${author}"/>
  
  <p class="reviews-text">${review}</p>
  <h2 class="reviews-subtitle">${author}</h2>

  </li>
  </div>
  `
      )
      .join('');

    selectors.container.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    selectors.container.insertAdjacentHTML(
      'afterbegin',
      `<p class="reviews-error-text">Not found</p>`
    );
  }
};

renderReviews();
