// The most common pragma directive is the refresh directive.


// <meta http-equiv="refresh" content="60; https://machinelearningworkshop.com/regTimeout" />







let refresh = document.querySelector('#refresh')
let quoteWrapper = document.querySelector('.quote-wrapper')

function fetchRandomQuote() {
    fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(result => dispalyData(result))
        .catch(error => console.log(error))

}
function dispalyData(quotes) {
    quoteWrapper.innerHTML = `<div class='quote-item'>
<p>${quotes.author}</p>
<p>${quotes.content}</p>
<p>${quotes.dateAdded}</p>
<p>${quotes.tags[0]}</p>
</div> `
}


refresh.addEventListener('click', () => {
    fetchRandomQuote();
})