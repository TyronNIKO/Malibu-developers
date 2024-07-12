import '../css/glass.css';

let resize = 0;
console.log(resize);
window.addEventListener('resize', () => {
    let size = window.innerWidth;
    // console.log(size, resize);
    console.log(size % 50 == 0);

    if (size % 25 == 0) {
        //     resize = 375;
        //     console.log(size, resize);
        addGlassEffect();
    }

    // if (size < 375 && resize !== 375) {
    //     resize = 375;
    //     console.log(size, resize);
    //     addGlassEffect();
    // }
    // if (size > 375 && size < 767 && resize !== 767) {
    //     resize = 767;
    //     console.log(size, resize);
    //     addGlassEffect();
    // }
    // if (size > 768 && size < 1440 && resize !== 1440) {
    //     resize = 1440;
    //     console.log(size, resize);
    //     addGlassEffect();
    // }
    // if (size > 1440 && resize !== 1441) {
    //     resize = 1441;
    //     console.log(size, resize);
    //     addGlassEffect();
    // }

    // addGlassEffect();
});

function addGlassEffect() {
    const glassList = document.querySelectorAll('.glass');
    let count = 10;
    const globalOffset = 0;
    const offset = 5;
    const compensation = {
        width: 0,
    };

    glassList.forEach(glass => {
        glass.innerHTML = '';
        if (innerWidth < 375) {
            // console.log('Less 375');
            glass.style.width = '90%';
            count = 6;
        }
        if (375 < innerWidth && innerWidth < 768) {
            let parent = glass.closest('.gradient');
            parent.classList.remove('gradient-red');
            parent.classList.add('gradient-red-tablet');
            glass.style.width = '75%';
            count = 6;
            // console.log('Less 768');
        }
        if (768 < innerWidth && innerWidth < 1440) {
            // console.log('Less 1440');
        }
        compensation.width = glass.clientWidth / count + offset;
        let markup = '';
        for (let i = 0; i < count; i++) {
            let elem = `<div class="glass-elem" style="width:${
                compensation.width
            }px; left:${compensation.width * i - offset * i}px;"></div>`;
            markup += elem;
        }
        glass.insertAdjacentHTML('beforeend', markup);
        setTimeout(() => {
            glass.classList.add('active');
        }, 500);
    });
}
addGlassEffect();
