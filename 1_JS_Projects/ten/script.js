let modelBackground = document.querySelector('.model-background')
let openModel = document.querySelector('.openModel')
let closeIcon = document.querySelector('.close-icon')
let closeBtn = document.querySelector('.close')

openModel.addEventListener('click', () => {
    modelBackground.style.display = 'block';
    console.log(modelBackground.style.cssText)
})
closeIcon.addEventListener('click', () => {
    modelBackground.style.display = 'none';
    
})

// other place click event CLOSE THE MODEL
window.addEventListener('click',(event)=>{
    console.log(event.target);
    if(event.target === modelBackground)
    {
        modelBackground.style.display="none"
    }
    
})

closeBtn.addEventListener('click', () => {
    modelBackground.style.display = 'none';
})
