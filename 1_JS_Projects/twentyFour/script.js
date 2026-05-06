let addBtn = document.querySelector('#addBtn');
let inputNotes = document.querySelector('#notes');
let notesListWrapper = document.querySelector('.notesList');
let error = document.querySelector('.error');

// Function to create a new note item
function createNewTodoItem(newTodo) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = newTodo;
    li.appendChild(p);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('btn', 'editBtn');
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('btn', 'deleteBtn');
    li.appendChild(deleteBtn);

    // Edit note functionality
    editBtn.addEventListener('click', () => {
        let updatedNote = prompt('Edit your note:', p.textContent);
        if (updatedNote) {
            p.textContent = updatedNote;
            updateNotesInStorage();
        }
    });

    // Delete note functionality
    deleteBtn.addEventListener('click', () => {
        li.remove();
        removeNoteFromStorage(newTodo);
    });

    return li;
}

// Save notes to local storage
function saveNotesToStorage(note) {
    let noteList = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    noteList.push(note);
    localStorage.setItem('notes', JSON.stringify(noteList));
}

// Fetch and display notes from local storage
function fetchAllNotes() {
    let notesList = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    notesListWrapper.innerHTML = ''; // Clear existing list

    notesList.forEach(note => {
        const noteItem = createNewTodoItem(note);
        notesListWrapper.appendChild(noteItem);
    });
}

// Remove note from local storage
function removeNoteFromStorage(noteText) {
    let notesList = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
    notesList = notesList.filter(note => note !== noteText);
    localStorage.setItem('notes', JSON.stringify(notesList));
}

// Update local storage after editing
function updateNotesInStorage() {
    let notesList = [];
    document.querySelectorAll('.notesList li p').forEach(p => {
        notesList.push(p.textContent);
    });
    localStorage.setItem('notes', JSON.stringify(notesList));
}

// Event listener for adding a new note
addBtn.addEventListener('click', () => {
    const extractInputText = inputNotes.value.trim();
    
    if (extractInputText.length <= 0) {
        error.textContent = `Input cannot be empty`;
        return;
    }
    
    error.textContent = ''; // Clear error message

    const newTodoItem = createNewTodoItem(extractInputText);
    notesListWrapper.appendChild(newTodoItem);
    inputNotes.value = ''; // Clear input field

    saveNotesToStorage(extractInputText);
});

// Load notes on page load
document.addEventListener('DOMContentLoaded', fetchAllNotes);
