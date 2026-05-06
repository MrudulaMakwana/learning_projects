let productsContainer = document.querySelector('.products-container')

let currentStep = 0

//each & every time 10 products,when load but one thing keep in mind if data already loaded in UI is not showing in  next
async function fetchListOfProducts(getCurrentStep) {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrentStep === 0 ? 0 : getCurrentStep * 10}`, { method: "GET" })
        const result = await response.json();
        console.log(result)
        if (result && result.products) displayProducts(result.products);

    }
    catch (err) {
        console.log(err);

    }
}

function displayProducts(products) {

    products.forEach(productItem => {

        const productItemWrapper = document.createElement('div');
        const productTitle = document.createElement('p');
        const productThumbnail = document.createElement('img');
        const productDescription = document.createElement('p');
        const productPrice = document.createElement('p');

        productItemWrapper.classList.add('product-item-wrapper')
        productTitle.textContent = productItem.title;
        productDescription.textContent = productItem.description;
        productThumbnail.src = productItem.thumbnail;
        productPrice.textContent = productItem.price;

        productTitle.classList.add('product-title')
        productThumbnail.classList.add('product-img')
        productPrice.classList.add('product-price')
        productDescription.classList.add('product-description')


        productItemWrapper.appendChild(productThumbnail)
        productItemWrapper.appendChild(productTitle)
        productItemWrapper.appendChild(productPrice)
        productItemWrapper.appendChild(productDescription)

        productsContainer.appendChild(productItemWrapper)
    })

    /* console.log(products);
     console.log(products[0].id);
     console.log(products[0].title);
     console.log(products[0].category);
     console.log(products[0].price);
     */
}

let loadMoreBtn = document.querySelector('.load-more-btn')
loadMoreBtn.addEventListener('click', () => {
    fetchListOfProducts(currentStep+=1);
})