// 1. Grab HTML elements

const noteForm = document.getElementById("note-form");
const noteTitle = document.getElementById("note-title");
const noteBody = document.getElementById("note-body");
const noteGrid = document.getElementById("note-grid");

// 2. Load existing notes from localStorage (or Start with an empty array);

let notes = JSON.parse(localStorage.getItem("my_quick_notes")) || [];

// 3. Save current notes array into local storage

function saveNotes() {
    localStorage.setItem("my_quick_notes", JSON.stringify(notes));
}


// Draw all notes on the screen

function renderNotes() {

    // Clear out whatever is currently shown
    noteGrid.innerHTML = "";

    // If there are no notes, show a simple message

    if(notes.length === 0) {
        noteGrid.innerHTML = `<p class="empty-message">No notes saved yet. Add one above`
    }

    // Loop through notes array and build HTML Cards

    notes.forEach((note) => {
        const card = document.createElement("div");
        card.className = "note-card";

        card.innerHTML = `
        <div>
            <h3>${note.title}</h3>
            <p>${note.body}</p>
        </div>
        <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
        `;

        noteGrid.appendChild(card);
    });
}

// 5. Add a new note when the form is submitted

noteForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page from refreshing on form submit

    const titleText = noteTitle.value.trim();
    const bodyText = noteBody.value.trim();

    if (!titleText || !bodyText) return;

    // Create a new notes object with a unique timestamp ID

    const newNote = {
        id: Date.now(),
        title: titleText,
        body: bodyText
    }

    // Add new note to the beginning of our array
    notes.unshift(newNote);

    // Save to browser and update the view
    saveNotes();
    renderNotes();


    // Reset the form input
    noteTitle.value = "";
    noteBody.value = "";
});

// Delete a note by its unique ID

function deleteNote(idToDelete) {
    // Keep only the notes whose id does not match the one clicked

    notes = notes.filter((note) => note.id !== idToDelete);

    saveNotes();
    renderNotes();
}

// Render saved notes on initial page load
renderNotes();