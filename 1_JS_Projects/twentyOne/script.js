
let userName = document.querySelector('#userName');
let searchBtn = document.querySelector('#searchBtn');
let loadingText = document.querySelector('#loadingText');
let gitHubProfileDetails = document.querySelector('.gitHubProfileDetails');
const loader = document.querySelector('#loadingText');
const BASE_URL = 'https://api.github.com/users/';



function displayProfileDetails(getProfileDetails) {
    const { login, avatar_url, public_repos, followers, following } = getProfileDetails;
    gitHubProfileDetails.innerHTML = `
<p class='userName'>${login}</p>
<img  src=${avatar_url} alt=${login} />
<p class='repos'>Repos:${public_repos} </p>
<p class='followers'>Followers:${followers} </p>
<p class='following'>Following:${following} </p>

`;
}
function showLoader() {
    loader.classList.add('showLoader')
    gitHubProfileDetails.classList.add('hide')
}

function removeLoader() {
    loader.classList.remove('showLoader')
    gitHubProfileDetails.classList.remove('hide')
}

async function fetchGitHubProfile() {
    showLoader();
    const response = await fetch(`${BASE_URL}${userName.value}`)

    const result = await response.json();
    console.log(result);
    if (result) {
        removeLoader();
        displayProfileDetails(result);
    }

}


searchBtn.addEventListener('click', fetchGitHubProfile);