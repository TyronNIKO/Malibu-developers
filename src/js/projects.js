import Swiper from "swiper";


const refs = {
    leftButton: document.querySelector('.swiper-button-prev'),
    rightButton: document.querySelector('.swiper-button-next')
};


const swiper = new Swiper('.swiper', {
  direction: 'horizontal', // Set direction (horizontal or vertical)
  loop: true, // Enable looping
  pagination: {
    el: '.swiper-pagination', // Add pagination
  },
  navigation: {
    nextEl: '.swiper-button-next', // Add navigation buttons
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar', // Add scrollbar if needed
  },
});


 const theSwiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like


refs.rightButton.addEventListener('click', () => {
    theSwiper.slideNext()
    
})
refs.leftButton.addEventListener('click', () => {
    theSwiper.slidePrev()
})

console.log("sads");