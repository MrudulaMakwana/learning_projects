let filterButtons = document.querySelector('.filterButtons')
let contentWrapper = document.querySelector('.contentWrapper')
const category = ['All', 'Women', 'Men', 'Kids'];

const content = [
    {
        id: 'Men',
        label: 'Men Shirt 1',
    },
    {
        id: 'Men',
        label: 'Men Shirt 2',
    },
    {
        id: 'Men',
        label: 'Men Shirt 3',
    },
    {
        id: 'Men',
        label: 'Men Shirt 4',
    }
    ,
    {
        id: 'Women',
        label: 'Women Shirt 1',
    },
    {
        id: 'Women',
        label: 'Women Shirt 2',
    },
    {
        id: 'Women',
        label: 'Women Shirt 3',
    },
    {
        id: 'Women',
        label: 'Women Shirt 4',
    }
    ,
    {
        id: 'Kids',
        label: 'Kids Shirt 1',
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 2',
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 3',
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 4',
    }
];

function createCategory() {
    category.forEach(category => {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = category;
        console.log(buttonElement);
        buttonElement.classList.add('filter-button');
        buttonElement.setAttribute('data-filter', category)
        filterButtons.appendChild(buttonElement)
    })
}

function createContent() {
    content.forEach(contentItem => {
        const singleContentItem = document.createElement('div');
        singleContentItem.classList.add('card', contentItem.id)
        singleContentItem.textContent = contentItem.label;
        contentWrapper.appendChild(singleContentItem)
    })
}

createCategory();
createContent();

const allFilterButtons = document.querySelectorAll('.filter-button')
const allCards = document.querySelectorAll('.card');
console.log(allCards);
console.log(allFilterButtons);

allFilterButtons.forEach(singleButton => {
    singleButton.addEventListener('click', () => {
        const extractCurrentCategory = singleButton.dataset.filter;
        console.log(extractCurrentCategory);
        filterCardByCategory(extractCurrentCategory, allCards);
    })
})

function filterCardByCategory(extractCurrentCategory, allCards) {
    allCards.forEach(item => {
        const isShowAllCards = extractCurrentCategory.toLowerCase() === 'all';
        const isItemFilterd = !item.classList.contains(extractCurrentCategory);
        if (isItemFilterd && !isShowAllCards) {
            item.classList.add('hide')
        }
        else {
            item.classList.remove('hide')
        }
    })
}