// access icon image and store it in a variable
var iconMenu = document.getElementById("icon-menu");

// store icon-hamburger in a variable
var iconHamburger = "images/icon-hamburger.svg";

// store icon-close in a variable
var iconClose = "images/icon-close.svg";

var mobileMenu = document.getElementById("mobile-menu");
var header = document.querySelector('header');
var body = document.querySelector('body');

// create function to change image
function changeMenu() {

    if (mobileMenu.classList.contains('open')) { // close menu
        body.classList.remove('noscroll'); // allow scrolling
        iconMenu.src = iconHamburger; // change image to icon-hamburger
        mobileMenu.classList.remove('open'); // hide menu
    } else { // open menu
        body.classList.add('noscroll'); // forbid scrolling
        iconMenu.src = iconClose; // change image to icon-close
        mobileMenu.classList.add('open'); // show menu
    }
}

// add event listener and call function
iconMenu.addEventListener("click", changeMenu);

