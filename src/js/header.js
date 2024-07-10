function header() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuEl = document.querySelector('.header-list-menu');
    const mobMenu = document.querySelector('.mobil-menu');
    const closeBtn = document.querySelector('.mobil-menu-close-btn');
    const dropdownMenu = document.querySelector(
        '.header-dropdown-menu-content'
    );
    const hiddenMenu = document.querySelector('.mobil-menu-nav-list');
    const orderBtn = document.querySelector('.mobil-menu-order-btn');
    const bodyEl = document.querySelector('body');

    // console.log(burgerMenu);
    // console.log(menuEl);
    // console.log(mobMenu);
    // console.log(closeBtn);
    // console.log(dropdownLink);

    burgerMenu.addEventListener('click', onBurgerMenuClick);
    function onBurgerMenuClick() {
        //   console.log(mobMenu.classList);
        mobMenu.classList.add('is-open');
        bodyEl.classList.add('mob-menu-overflow');
    }

    menuEl.addEventListener('click', onMenuElClick);
    function onMenuElClick() {
        //   console.log(menuEl.classList);
        dropdownMenu.classList.toggle('visually-hidden');
    }
    dropdownMenu.addEventListener('click', ondropdownLinkClick);

    function ondropdownLinkClick(e) {
        if (e.target !== e.currentTarget) {
            dropdownMenu.classList.toggle('visually-hidden');
        }
    }

    closeBtn.addEventListener('click', onСloseBtnClick);
    function onСloseBtnClick() {
        mobMenu.classList.remove('is-open');
        bodyEl.classList.remove('mob-menu-overflow');
    }

    orderBtn.addEventListener('click', onСloseBtnClick);

    hiddenMenu.addEventListener('click', onMobileMenuClick);
    function onMobileMenuClick(e) {
        if (e.target === e.currentTarget) {
            return;
        }
        mobMenu.classList.remove('is-open');
        bodyEl.classList.remove('mob-menu-overflow');
        // window.location.href = e.target.dataset.source;
    }
    document.addEventListener('keydown', e => {
        if (mobMenu.classList.contains('is-open') && e.code === 'Escape')
            mobMenu.classList.remove('is-open');
    });
}
header();
