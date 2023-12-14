// javascript code goes here

const noteInput = document.querySelector("#noteInput");
const saveBtn = document.querySelector("#saveButton");
const noteList = document.querySelector('#noteList');
let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
    notes.push(noteInput.value);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    displayNotes();
}

function displayNotes() {
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        const noteTxt = document.createTextNode(note);
        const loadBtn = document.createElement('button');
        loadBtn.classList.add('load-button');
        loadBtn.setAttribute('data-index', index);
        loadBtn.textContent = 'load';
        loadBtn.addEventListener('click', () => {
            alert(note);
        });

        noteDiv.appendChild(noteTxt);
        noteDiv.appendChild(loadBtn);
        noteList.appendChild(noteDiv);
    });
}
saveBtn.addEventListener('click', saveNotes);
displayNotes();