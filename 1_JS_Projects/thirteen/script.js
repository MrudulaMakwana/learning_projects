let userInput = document.getElementById('userInput')
let qrContainer = document.querySelector('.qrContainer')
let generateQRBtn = document.querySelector('.generateQRBtn')
let errorMessage = document.querySelector('.errorMessage')
generateQRBtn.addEventListener('click', () => {
    validateInputField();
})

function validateInputField() {
    console.log(userInput.value);
    if (userInput.value.trim().length > 0) {
        generateQRCode();
    }
    else {
        qrContainer.innerHTML = '';
        errorMessage.textContent = 'Enter text and use some URL to generate QR code'

    }
}

function generateQRCode() {
    qrContainer.innerHTML = '';
    new generateQRCode(qrContainer, {
        text: userInput.value,
        height: 400,
        width: 400,
        colorLight: '#fff',
        colorDark: '#000',
    })
    userInput.value = '';
    errorMessage.textContent = '';
}