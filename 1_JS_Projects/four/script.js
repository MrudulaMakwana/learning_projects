// interview perspective
// fetch using XHR  =XML htttp request
const postListContainer = document.querySelector('.posts-list-container');

// create http request
/*function fetchUsingxHR(){
    const xhr=new XMLHttpRequest();
    // which url we want fetch
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    // response type define kari ae chiye
    xhr.responseType='json';

    // send karvnai
    xhr.send();

    xhr.onload=()=>{
        if(xhr.status===200)
        {
            displayResult(xhr.response)
            console.log(xhr);
        }
        else{
            console.log("error");
        }
    }
}

fetchUsingxHR()
function displayResult(posts){
postListContainer.innerHTML=posts.map(postItem=>`<div class='post-item'>
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>`).join(" ")
}

*/

// fetch using fetch

function fetchUsingFetch() {
    let fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'GET',
        });
    fetchRequest
        .then(response => response.json())
        .then(result => displayResult(result))
        .catch(error => console.log(error))

}
// fetchUsingFetch();

function displayResult(posts) {
    postListContainer.innerHTML = posts.map(postItem => `<div class='post-item'>
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
        </div>`).join(" ")
}

//  async-await

async function fetchUsingAsyncAwait() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    });
    const result = await response.json();
    displayResult(result)
    console.log("Result : ", result);

}

// fetchUsingAsyncAwait();


// usnig fetchhmhrandasync
function helperMethod(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.send();
        xhr.load = () => {
            if (xhr.status === 200) {
                resolve(xhr.response)
            }
            else {
                reject(xhr.response)
            }
        }
    })
    return promise;
}
async function fetchUsingXHRAndAsyncAwait() {
    const response = await helperMethod('GET', 'https://jsonplaceholder.typicode.com/posts');
    displayResult(response)
}



fetchUsingXHRAndAsyncAwait()