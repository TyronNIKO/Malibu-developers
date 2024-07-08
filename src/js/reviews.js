import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import sprite from '/img/icons/icons-sprite.svg';

function initReviews() {
    const swiperReviews = new Swiper('.reviews-wrapper', {
        modules: [Navigation, Keyboard, Mousewheel],
        direction: 'horizontal',
        updateOnWindowResize: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
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
            prevEl: '.reviews-wrapper .prev',
            nextEl: '.reviews-wrapper .next',
            preventClicks: false,
        },
    });

    let currentId = 1;

    const selectors = {
        container: document.querySelector('.reviews-list'),
        btnPrev: document.querySelector('.reviews-wrapper .prev'),
        btnNext: document.querySelector('.reviews-wrapper .next'),
    };
    const temp = `
            <svg class="reviews-btn-left-icon btn-icon" width="24" height="24" aria-label="left arrow">
                <use href="${sprite}#icon-arrow"></use>
            </svg>
            `;
    console.log(selectors.btnPrev, temp);
    setTimeout(() => {
        selectors.btnPrev.insertAdjacentHTML('beforeend', temp);
    }, 2000);

    async function fetchReviews(id) {
        try {
            const response = await axios.get(
                'https://portfolio-js.b.goit.study/api/reviews',
                { params: { id } }
            );

            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.data;
        } catch (error) {
            throw new Error(`Fetching reviews failed: ${error.message}`);
        }
    }

    async function renderReviews() {
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
            showNotification(error.message);
        }
    }

    renderReviews();

    // Function: show notification
    const showNotification = msg => {
        iziToast.settings({
            timeout: 5000,
            titleColor: '#fff',
            position: 'center',
            messageColor: '#fff',
            icon: '',
        });
        iziToast.error({
            message: msg,
            timeout: 5000,
            position: 'center',
            backgroundColor: '#EF4040',
        });
    };
}
initReviews();
