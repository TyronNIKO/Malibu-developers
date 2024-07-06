const burgerMenu = document.querySelector('.burger-menu');
const menuEl = document.querySelector('.header-list-menu');
const mobMenu = document.querySelector('.mobil-menu');
const closeBtn = document.querySelector('.mobil-menu-close-btn');
const dropdownMenu = document.querySelector('.header-dropdown-menu-content');
const hiddenMenu = document.querySelector('.mobil-menu-nav-list');

// console.log(burgerMenu);
// console.log(menuEl);
// console.log(mobMenu);
// console.log(closeBtn);
// console.log(dropdownMenu);

burgerMenu.addEventListener('click', onBurgerMenuClick);
function onBurgerMenuClick() {
  //   console.log(mobMenu.classList);
  mobMenu.classList.add('is-open');
}

menuEl.addEventListener('click', onMenuElClick);
function onMenuElClick() {
  //   console.log(menuEl.classList);
  dropdownMenu.classList.toggle('visually-hidden');
}

closeBtn.addEventListener('click', onСloseBtnClick);
function onСloseBtnClick() {
  mobMenu.classList.remove('is-open');
}

hiddenMenu.addEventListener('click', onMobileMenuClick);
function onMobileMenuClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  mobMenu.classList.remove('is-open');
  window.location.href = e.target.dataset.source;
}
