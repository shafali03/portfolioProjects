/* =========================================
                Preloader
============================================ */

let preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.style.display = 'none';
});



/* =========================================
                Animation
============================================ */

window.addEventListener('load', function () {

    const heading_1 = document.querySelector('#home__heading-1');
    heading_1.classList.add('animated', 'fadeInDown');

    const heading_2 = document.querySelector('#home__heading-2');
    heading_2.classList.add('animated', 'fadeInLeft');

    const homeBtn = document.querySelector('.home-btn-box');
    homeBtn.classList.add('animated', 'zoomIn');

    const arrowDown = document.querySelector('#arrow-down');
    arrowDown.classList.add('animated', 'fadeInDown', 'infinite');

});

