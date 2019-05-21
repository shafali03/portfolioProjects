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

/* =========================================
                Navigation
============================================ */

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navIconToggle = document.querySelector("#nav-icon");

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

navIconToggle.addEventListener("click", function () {
    navIconToggle.classList.toggle("active");
})





/* =========================================
                Modal button
============================================ */
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
};






