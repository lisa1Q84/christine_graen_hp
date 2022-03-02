
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



window.onscroll = () => {
  const div = document.querySelector('#navbarbg');
  if(this.scrollY <= 10) div.className= ''; else div.className = 'scroll';
};


// Slider 

let slider = tns({
	container : ".my-slider",
	"slideBy" : "1",
	"speed" : 400,
	"nav" : false,
	autoplay: true,
	controls: false,
	autoplayButtonOutput: false,
	responsive: {
		1600: {
			items: 4,
			gutter: 20
		},
		1024: {
			items: 3,
			gutter: 20
		},
		768: {
			items: 2,
			gutter: 20
		},
		480: {
			items: 1
		}
	}






})