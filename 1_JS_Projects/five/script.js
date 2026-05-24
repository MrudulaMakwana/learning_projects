const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container');

async function fetchImage() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
        const imageList = await response.json();
        if (imageList.length > 0) {
            displayImage(imageList);
            setTimeout(handleImageSlider, 500); // Ensure elements are rendered before handling events
        }
    } catch (error) {
        console.log(error);
    }
}

function displayImage(getImageList) {
    slider.innerHTML = getImageList.map(item => `
        <div class="slide">
            <img src="${item.download_url}" alt="image ${item.id}" />
        </div>
    `).join('');

    dotsContainer.innerHTML = getImageList.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
    `).join('');
}

function handleImageSlider() {
    const slides = document.querySelectorAll('.slide');
    const preBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function activeDot(slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide='${slide}']`).classList.add('active');
    }

    function changeCurrentSlide(slide) {
        slides.forEach((s, index) => {
            s.style.transform = `translateX(-${slide * 100}%)`;
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    });

    preBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            currentSlide = Number(e.target.dataset.slide);
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);
        }
    });
}

fetchImage();
