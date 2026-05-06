let paginationList = document.querySelector('.pagination-list');
let paginationContainer = document.querySelector('.paginationContainer');
let paginationNumbers = document.querySelector('.paginationNumbers');
let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector('.prevBtn');

// Generate Dummy Data
function dummyData() {
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li');
        li.textContent = `Card ${i}`;
        paginationList.appendChild(li);
    }
}
dummyData();

// Extract list items
const extractAllListItem = document.querySelectorAll('.pagination-list li');
let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListItem.length / paginationLimit);
let currentPage = 1;

// Create Page Number Buttons
function createPageNumber(getCurrentIndex) {
    const pageNumber = document.createElement('button');
    pageNumber.classList.add('pagination-number');
    pageNumber.textContent = getCurrentIndex;
    pageNumber.setAttribute('page-index', getCurrentIndex);

    pageNumber.addEventListener('click', () => {
        handleCurrentPage(getCurrentIndex);
    });

    paginationNumbers.appendChild(pageNumber);
}

// Generate Pagination Numbers
function createPaginationNumbers() {
    paginationNumbers.innerHTML = ''; // Clear existing numbers
    for (let i = 1; i <= pageCount; i++) {
        createPageNumber(i);
    }
}

// Highlight Active Page Number
function handleActivePageNumber() {
    document.querySelectorAll('.pagination-number').forEach(button => {
        button.classList.remove('active-state');
        if (Number(button.getAttribute('page-index')) === currentPage) {
            button.classList.add('active-state');
        }
    });
}

// Enable/Disable Pagination Buttons
function handlePaginationButtonStatus() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === pageCount;
}

// Handle Current Page Change
function handleCurrentPage(getCPN) {
    currentPage = getCPN;
    handleActivePageNumber();
    handlePaginationButtonStatus();

    let startRange = (currentPage - 1) * paginationLimit;
    let endRange = currentPage * paginationLimit;

    extractAllListItem.forEach((listItem, index) => {
        listItem.style.display = (index >= startRange && index < endRange) ? 'block' : 'none';
    });
}

// Initialize Pagination
createPaginationNumbers();
handleCurrentPage(1);

// Event Listeners for Next & Previous Buttons
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        handleCurrentPage(currentPage - 1);
    }
});
nextBtn.addEventListener('click', () => {
    if (currentPage < pageCount) {
        handleCurrentPage(currentPage + 1);
    }
});
