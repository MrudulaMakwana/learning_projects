let progress = document.querySelector('.progress');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let iconWrapper = document.querySelectorAll('.iconWrapper');
let currentSelectedStep = 1;
nextBtn.addEventListener('click', () => {
    if (currentSelectedStep < iconWrapper.length) {
        currentSelectedStep++;
    }
    handleUpdateStep();
});
prevBtn.addEventListener('click', () => {
    if (currentSelectedStep > 1) {
        currentSelectedStep--;
    }
    handleUpdateStep();
});

function handleUpdateStep() {
    iconWrapper.forEach((item, index) => {
        if (index < currentSelectedStep) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    progress.style.width = ((currentSelectedStep - 1) / (iconWrapper.length - 1)) * 100 + "%";

    prevBtn.disabled = currentSelectedStep === 1;
    nextBtn.disabled = currentSelectedStep === iconWrapper.length;
}
