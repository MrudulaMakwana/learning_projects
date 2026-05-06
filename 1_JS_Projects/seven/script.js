


const changeTheme=document.querySelector('.changeTheme')
const body=document.querySelector('body');

changeTheme.addEventListener('click',()=>{// if(body.classList.contains('light')) //both are rights
    if(body.style.backgroundColor=='light')
    {
        body.classList.remove('light')
        body.classList.add('dark')
    }
    else{
        body.classList.remove('dark')
        body.classList.add('light')
    }
})