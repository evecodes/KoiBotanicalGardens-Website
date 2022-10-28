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
    timeout = setTimeout(navHideDelay, 200);
})

linkGarden.addEventListener('click', e => {
    timeout = setTimeout(navHideDelay, 200);
})

linkTea.addEventListener('click', e => {
    timeout = setTimeout(navHideDelay, 200);
})

linkContact.addEventListener('click', e => {
    timeout = setTimeout(navHideDelay, 200);
})

function navHideDelay() {
    navToggle.classList.toggle('nav-hide');
    hamburgerStripe.classList.toggle('stripe-active');
}


/*Idea: Reverse observer combined with data true/false?*/


// window.onscroll = function () {
//     let isScrolled = false;
//     const navBar = document.querySelector('#navbar')
//     const navBarPoint = 600;

//     function onScroll () {
//         if (window.scrollY >= navBarPoint && !isScrolled) {
//             console.log('peach')
//             navBar.style.backgroundColor = 'var(--key-color';
//             isScrolled = true;
//         } else if (window.scrollY <= navBarPoint && !isScrolled) {
//             navBar.style.backgroundColor = 'transparent';
//             console.log('banana');
//             isScrolled = false;
//         } 
//     }

//     onScroll();
//     return onScroll;
// }


/*ALT version scroll*/

// const navBar = document.querySelector('#navbar')
// const navBarPoint = 600;

// window.addEventListener('scroll', e => {
//     if (window.scrollY >= navBarPoint ) {
//         console.log('peach')
//         navBar.style.backgroundColor = 'var(--key-color';
//     } else {
//         navBar.style.backgroundColor = 'transparent';
//         console.log('banana');
//     }    
// })

/*Change?*/



/*ALT save*/

// linkGarden.addEventListener('click', e => {
//     navToggle.classList.toggle('nav-hide');
//     hamburgerStripe.classList.toggle('stripe-active');
// })

// linkTea.addEventListener('click', e => {
//     navToggle.classList.toggle('nav-hide');
//     hamburgerStripe.classList.toggle('stripe-active');
// })

// linkHome.addEventListener('click', e => {
//     navToggle.classList.toggle('nav-hide');
//     hamburgerStripe.classList.toggle('stripe-active');
// })

// linkContact.addEventListener('click', e => {
//     navToggle.classList.toggle('nav-hide');
//     hamburgerStripe.classList.toggle('stripe-active');
// })