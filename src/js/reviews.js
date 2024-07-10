import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Keyboard, Mousewheel } from 'swiper/modules';

function reviewsInit() {
    const swiper = new Swiper('.reviews-swiper', {
        modules: [Keyboard, Mousewheel],
        updateOnWindowResize: true,
        spaceBetween: 20,
        height: 302,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        mousewheel: {
            invert: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        },

        navigation: {
            prevEl: '.reviews-swiper .prev',
            nextEl: '.reviews-swiper .next',
            // preventClicks: false,
        },
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            if (e.shiftKey) {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    });
    let currentId = 1;

    const selectors = {
        container: document.querySelector('.reviews-list'),
        btnPrev: document.querySelector('.reviews-swiper .prev'),
        btnNext: document.querySelector('.reviews-swiper .next'),
    };

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
                                                            <li class="swiper-slide " data="${_id}">
                                                                <div class="reviews-item">
                                                                    <img class="reviews-img" src="${avatar_url}" alt="${author}"/>
                                                                    <h2 class="reviews-subtitle">${author}</h2>
                                                                    <p class="reviews-text">${review}</p>
                                                                </div>
                                                            </li>
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
reviewsInit();
