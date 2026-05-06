let postsContainer = document.querySelector('.postsContainer');
let progressBar=document.querySelector('.progressBar');

let progressContainer = document.querySelector('.progressContainer');


function fetchListOfPosts() {
    fetch('https://dummyjson.com/posts', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => displayResult(result.posts))

}
function displayResult(getPosts) {
    getPosts.forEach(postItem => {
        const postItemWrapper = document.createElement('div')
        postItemWrapper.classList.add('post-item-wrapper')
        const postTitle = document.createElement('label')
        postTitle.textContent = postItem.title;

        const postBody = document.createElement('p');
        postBody.textContent = postItem.body;

        const postTags = document.createElement('div');
        postTags.textContent = postItem.tags.map(tagItem => tagItem).join(',');

        postItemWrapper.appendChild(postTitle)
        postItemWrapper.appendChild(postBody)
        postItemWrapper.appendChild(postTags)



        postsContainer.appendChild(postItemWrapper)
    });
}

fetchListOfPosts();





window.onscroll = function () {
    handleScroll();
}
function handleScroll() {
    let getScrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let howMuchPercentageAlreadyScrolled = (getScrollFromTop / height) * 100;

    progressBar.style.width=`${howMuchPercentageAlreadyScrolled}%`

}


