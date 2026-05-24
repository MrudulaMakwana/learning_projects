let navbar = document.querySelector('.navbar');
let navTop = navbar.offsetTop;

window.onscroll = function () {
    handleStickyNavOnScroll();
}

function handleStickyNavOnScroll() {
    if (window.scrollY >= navTop) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
}
