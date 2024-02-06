const menuBtn = document.querySelector('.header .icon-menu');
const menuBtnClose = document.querySelector('.navbar-mobile .img-close-menu');
const sideNavBar = document.querySelector('.header .navbar-mobile-container');

menuBtn.addEventListener('click', () => {
    console.log('assw');
    sideNavBar.classList.toggle('open');
});

menuBtnClose.addEventListener('click', () => {
    sideNavBar.classList.toggle('open');
});