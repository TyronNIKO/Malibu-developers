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

    function toggleDropdownMenu(e) {
        console.log(e.target);
        if (e.target !== e.currentTarget) {
            dropdownMenu.classList.toggle('d-none');
        }
    }
    function openModalMenu(e) {
        console.log(e.target);
        mobMenu.classList.add('is-open');
        bodyEl.classList.add('mob-menu-overflow');
    }

    function closeModalMenu(e) {
        mobMenu.classList.remove('is-open');
        bodyEl.classList.remove('mob-menu-overflow');
    }
    const header = {
        hideMenu() {
            dropdownMenu.classList.add('d-none');
        },
        showMenu() {
            dropdownMenu.classList.remove('d-none');
        },
    };

    menuEl.addEventListener('click', toggleDropdownMenu);
    burgerMenu.addEventListener('click', openModalMenu);
    dropdownMenu.addEventListener('click', toggleDropdownMenu);
    hiddenMenu.addEventListener('click', closeModalMenu);
    closeBtn.addEventListener('click', closeModalMenu);
    orderBtn.addEventListener('click', closeModalMenu);
    document.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            e.preventDefault();
            closeModalMenu();
            header.hideMenu();
        }
    });
}
headerInit();
