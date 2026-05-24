const stars = document.querySelectorAll('.fa-star');
let selectedRV = document.querySelector('#selectedRV');
let selectedRating = 0;

function updateStarDisplay(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid');
        } else {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular');
        }
    });
}

function handleMouseOver(event) {
    const rating = parseInt(event.target.dataset.rating);
    updateStarDisplay(rating);
}

function handleClick(event) {
    selectedRating = parseInt(event.target.dataset.rating);
    selectedRV.textContent = selectedRating;
    updateStarDisplay(selectedRating);
}

function handleMouseLeave() {
    updateStarDisplay(selectedRating);
}

stars.forEach((star) => {
    star.addEventListener('mouseover', handleMouseOver);
    star.addEventListener('click', handleClick);
    star.addEventListener('mouseleave', handleMouseLeave);
});
