let rippleEffect = document.querySelectorAll('.rippleEffect')

rippleEffect.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.clientX, event.target.offsetLeft, event.clientY, event.target.offsetTop);
        let xCoordinateValue = event.clientX - event.target.offsetLeft;

        let yCoordinateValue = event.clientY - event.target.offsetTop;

        let rippleElement = document.createElement('span');
        rippleElement.classList.add('ripple'); // Add CSS class
        rippleElement.style.left = `${xCoordinateValue}px`;
        rippleElement.style.top = `${yCoordinateValue}px`;

        event.target.appendChild(rippleElement); // Fix: Use event.target

        window.setTimeout(() => {
            rippleElement.remove();
        }, 1000);
    })
})