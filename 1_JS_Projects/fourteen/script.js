let userList = document.querySelector('.userList');
let scrolltoBottom = document.querySelector('#scrolltoBottom');
let scrolltoTop = document.querySelector('#scrolltoTop');
let loader = document.querySelector('.loader')

function showLoader() {
    loader.classList.add('show-loader')
    userList.classList.add('hide-user-list')
}
function removeLoader() {
    loader.classList.remove('show-loader')
    userList.classList.remove('hide-user-list')
}


async function fetchListUser() {
    showLoader();
    const response = await fetch('https://dummyjson.com/users?limit=100', { method: 'GET' })

    const result = await response.json();
    if (result && result.users) displayUserList(result.users);
    removeLoader();
}
function displayUserList(getUsers) {
    console.log(getUsers);
    
    userList.innerHTML = getUsers.map(userItem =>
        `
        <li>
             <p>${userItem.firstName} ${userItem.lastName}</p>
         </li>
         `
    ).join('');
}

scrolltoTop.addEventListener('click',()=>{
window.scrollTo({
    top:0,
    behavior:'smooth'
});
});

scrolltoBottom.addEventListener('click',()=>{
    console.log(document.body.scrollHeight);
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'
    })
})


fetchListUser();