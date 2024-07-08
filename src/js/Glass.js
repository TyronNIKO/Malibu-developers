import '../css/glass.css';

(() => {
    const glassList = document.querySelectorAll('.glass');
    let count = 10;
    const globalOffset = 0;
    const offset = 5;
    const compensation = {
        width: 0,
    };
    const innerWidth = window.innerWidth;

    window.addEventListener('resize', () => {
        innerWidth = window.innerWidth;
        const mobileMenu = document.querySelector('.mobil-menu');
        const isOpen = mobileMenu.classList.contains('is-open');
        // console.log(innerWidth, isOpen);

        if (isOpen) {
            // console.log('is open');
        }
        if (375 < innerWidth && innerWidth < 768) {
            // console.log(' Less 768');
        }
        if (768 < innerWidth && innerWidth < 1440) {
            // console.log('Less 1440');
        }
    });
    glassList.forEach(glass => {
        if (innerWidth < 375) {
            console.log('Less 375');
            glass.style.width = '90%';
            count = 6;
        }
        if (375 < innerWidth && innerWidth < 768) {
            let parent = glass.closest('.gradient');
            parent.classList.remove('gradient-red');
            parent.classList.add('gradient-red-tablet');
            glass.style.width = '75%';
            count = 6;
            console.log('Less 768');
        }
        if (768 < innerWidth && innerWidth < 1440) {
            console.log('Less 1440');
        }
        let elem = document.createElement('div');
        compensation.width = glass.clientWidth / count + offset;
        console.log(compensation);
        elem.classList.add('glass-elem');
        elem.style.width = `${compensation.width}px`;
        for (let i = 0; i < count; i++) {
            // for (let i = count - 1; i >= 0; i--) {
            const clone = elem.cloneNode(true);
            clone.style.left = `${compensation.width * i - offset * i}px`;
            //   clone.style.left = `${compensation * i}px`;
            glass.insertAdjacentElement('beforeend', clone);
        }
        setTimeout(() => {
            glass.classList.add('active');
        }, 500);
    });
})();
