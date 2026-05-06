let imageContainer = document.querySelector('.imageContainer');

let count = 1;
let generateBtn = document.querySelector('#generateBtn');

generateBtn.addEventListener('click', () => {

    fetchRandomImage((count+=5));

})

async function fetchRandomImage(getcount) {
    for (let i = getcount; i <= getcount + 4; i++) {
        let imageElemnt=document.createElement('img');
        imageElemnt.src=`https://picsum.photos/300?random=${i}`;
        imageContainer.appendChild(imageElemnt);
    }
}

