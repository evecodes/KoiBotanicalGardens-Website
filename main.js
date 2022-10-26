const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerStripe = document.querySelector(".hamburger-stripe");
const navToggle = document.querySelector(".navbar")
const linkHome = document.querySelector(".home-button");
const linkGarden = document.querySelector(".garden-button");
const linkTea = document.querySelector(".tea-button");
const linkContact = document.querySelector(".contact-button");

hamburgerMenu.addEventListener('click', e => {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
});

linkHome.addEventListener('click', e => {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
})

linkGarden.addEventListener('click', e => {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
})

linkTea.addEventListener('click', e => {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
})

linkContact.addEventListener('click', e => {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
})