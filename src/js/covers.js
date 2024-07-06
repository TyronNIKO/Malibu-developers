const coverRefs = {
  marqueeCards: document.querySelectorAll('.marquee-card'),
  sectionCovers: document.querySelector('#covers'),
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

function animateCards(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      coverRefs.marqueeCards.forEach(card => {
        card.classList.remove('animation');
      });
      return;
    }
    coverRefs.marqueeCards.forEach(card => {
      card.classList.add('animation');
    });
  });
}

let observer = new IntersectionObserver(animateCards, observerOptions);
observer.observe(coverRefs.sectionCovers);
