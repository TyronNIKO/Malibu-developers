function headerInit() {
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

    function onBurgerMenuClick() {
        //   console.log(mobMenu.classList);
        mobMenu.classList.add('is-open');
        bodyEl.classList.add('mob-menu-overflow');
    }
    function onСloseBtnClick() {
        mobMenu.classList.remove('is-open');
        bodyEl.classList.remove('mob-menu-overflow');
    }
    function onMenuElClick() {
        //   console.log(menuEl.classList);
        dropdownMenu.classList.toggle('d-none');
    }
    function onMobileMenuClick(e) {
        if (e.target === e.currentTarget) {
            return;
        }
        mobMenu.classList.remove('is-open');
        bodyEl.classList.remove('mob-menu-overflow');
        // window.location.href = e.target.dataset.source;
    }
    function ondropdownLinkClick(e) {
        if (e.target !== e.currentTarget) {
            dropdownMenu.classList.toggle('d-none');
        }
    }

    menuEl.addEventListener('click', onMenuElClick);
    burgerMenu.addEventListener('click', onBurgerMenuClick);
    dropdownMenu.addEventListener('click', ondropdownLinkClick);
    hiddenMenu.addEventListener('click', onMobileMenuClick);
    closeBtn.addEventListener('click', onСloseBtnClick);
    orderBtn.addEventListener('click', onСloseBtnClick);
    document.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            e.preventDefault();
            onСloseBtnClick();
            onMenuElClick();
        }
    });
}
headerInit();
