const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerStripe = document.querySelector(".hamburger-stripe");
const navToggle = document.querySelector(".navbar")
const linkHome = document.querySelector(".home-button");
const linkGarden = document.querySelector(".garden-button");
const linkTea = document.querySelector(".tea-button");
const linkContact = document.querySelector(".contact-button");


//Hamburger menu//

hamburgerMenu.addEventListener('click', e => {
    navActivate();
});

linkHome.addEventListener('click', e => {
    timeout = setTimeout(navActivate, 200);
})

linkGarden.addEventListener('click', e => {
    timeout = setTimeout(navActivate, 200);
})

linkTea.addEventListener('click', e => {
    timeout = setTimeout(navActivate, 200);
})

linkContact.addEventListener('click', e => {
    timeout = setTimeout(navActivate, 200);
})

function navActivate() {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
}


//Changing navigation on scroll//

const mainTitle = document.querySelector("[data-title]");
const navMenu = document.querySelector("[data-top]");

const navObserverOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-10% 0% 0% 0%",
}

const navObserver = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navMenu.setAttribute('data-navchange', 'active');
        } else {
            navMenu.removeAttribute('data-navchange', 'active');
        }
    })
}, navObserverOptions);


//Media query for changing navigation observer//

const mediaQueryLandscape = window.matchMedia('(min-width: 46em)')

function widthChange(mediaQueryLandscape) {
    if (mediaQueryLandscape.matches) {
        navObserver.observe(mainTitle);
    } else {
        navObserver.unobserve(mainTitle);
        navMenu.removeAttribute('data-navchange', 'active');
    }
};

widthChange(mediaQueryLandscape);

mediaQueryLandscape.addEventListener('change', widthChange);