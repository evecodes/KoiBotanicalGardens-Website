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


//Hamburger menu switch off when changing screen size//

const mediaQueryMobileOff = window.matchMedia('(max-width: 46em)');

function navMenuChange(mediaQueryMobileOff) {
    if (mediaQueryMobileOff.matches) {
        return;
    } else {
        navToggle.classList.add('nav-hide');
        hamburgerStripe.classList.remove('stripe-active');
    }
}

navMenuChange(mediaQueryMobileOff);

mediaQueryMobileOff.addEventListener('change', navMenuChange);


//Nav and anchor tag height offset//

const navHeight = document.querySelector('[data-top]').offsetHeight;


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
            linkHome.classList.remove("underline")
            document.documentElement.style.setProperty('--changing-link-hover', 'hsl(0, 0%, 0%)');
        } else {
            navMenu.removeAttribute('data-navchange', 'active');
            linkHome.classList.add("underline");
            document.documentElement.style.setProperty('--changing-link-hover', 'hsl(42, 100%, 50%)');
        }
    })
}, navObserverOptions);


//Media query for changing navigation observer, anchor tags and menu//

const mediaQueryLandscape = window.matchMedia('(min-width: 46em)')

function widthChange(mediaQueryLandscape) {
    if (mediaQueryLandscape.matches) {
        navObserver.observe(mainTitle);
        document.documentElement.style.setProperty('--scroll-padding', navHeight + 10 + "px");
    } else {
        navObserver.unobserve(mainTitle);
        navMenu.removeAttribute('data-navchange', 'active');
        linkHome.classList.remove("underline");
        navToggle.classList.add('nav-hide');
        hamburgerStripe.classList.remove('stripe-active');
        document.documentElement.style.setProperty('--scroll-padding', navHeight - 20 + "px");
    }
};

widthChange(mediaQueryLandscape);

mediaQueryLandscape.addEventListener('change', widthChange);