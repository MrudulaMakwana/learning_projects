const data = [
    {
        id: '1',
        question: 'what is are accordion components ? ',
        answer: 'Accordion components are user interface elemnts'
    },
    {
        id: '2',
        question: 'what they are used for ? ',
        answer: 'They are commonly employed in various contextz'
    }
]

// console.log(data[0].id)

let accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map(
        (dataItem) => `
        <div class='accodion_item'>
            <div class='accodion_title'>
            <h3>${dataItem.question}</h3>
            <i class=fa-solid fa-arrow-up></i>
            </div>
            <div class='accordion_content'>
            <p>${dataItem.answer}</p>
            </div>
        </div>
        `
    ).join('')
}

createAccordionData()
// nodeList
const getAccordionTitle = document.querySelectorAll('.accodion_title')
console.log('=============================');
console.log(getAccordionTitle);
console.log('=============================');
getAccordionTitle.forEach(curI => {
    curI.addEventListener('click', (event) => {
        if (curI.classList.contains('active')) {
            curI.classList.remove('active')
            
        } else {
            let getAlreadyActiveClasses = document.querySelectorAll('.active')
            getAlreadyActiveClasses.forEach(curActiveItem => {
                curActiveItem.classList.remove('active')
            })
            curI.classList.add('active')
        }
    })
})

getAccordionTitle.forEach(curI=>{
    curI.addEventListener('click',()=>{
        
    })
})