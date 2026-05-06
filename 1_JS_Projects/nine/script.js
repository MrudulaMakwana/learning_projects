const tabContainer = document.querySelector('.container')

const tabButton = document.querySelectorAll('.tab-button')

const tabContents = document.querySelectorAll('.content');


tabContainer.addEventListener('click', (event) => {
    console.log(event.target.dataset);
    const currentId = event.target.dataset.id
    if (currentId) {
        tabButton.forEach(btn => {
            btn.classList.remove('active')
        }
        )
        event.target.classList.add('active')

        tabContents.forEach(content => {
            content.classList.remove('active')

        })
        const currentContentElement = document.getElementById(currentId)

        currentContentElement.classList.add('active')
    }

})