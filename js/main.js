//Followed instructions from https://medium.com/@adamwojnicki/lets-build-a-simple-responsive-navigation-bar-with-html-css-and-a-little-bit-of-vanilla-js-5abba28da32e

// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav-menu');
// Defining the function
function toggleNav() {
burger.classList.toggle('fa-bars');
burger.classList.toggle('fa-times');
nav.classList.toggle('nav-menu-active');
}
// Calling the function after click event occurs
burger.addEventListener('click', function() {
toggleNav();
});