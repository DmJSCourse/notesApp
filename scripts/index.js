let notes = [
    {id: 0, state: "active", name: "Shopping list", created: "April 20, 2021", category: "Task", content: "tomatoes, bread", dates: ""},
    {id: 1, state: "active", name: "The theory of evolution", created: "April 27, 2021", category: "Random Thought", content: "The evolution", dates: ""},
    {id: 2, state: "active", name: "New feature", created: "May 05, 2021", category: "Idea", content: "Implement new feature 5/5/2021", dates: "5/5/2021"},
    {id: 3, state: "active", name: "William Gaddis", created: "May 07, 2021", category: "Task", content: "Lorem Ipsum", dates: ""},
    {id: 4, state: "active", name: "Books", created: "May 15, 2021", category: "Idea", content: "The Lean Startup", dates: ""},
    {id: 5, state: "active", name: "Books", created: "May 16, 2021", category: "Random Thought", content: "16/5/2021 book", dates: "16/5/2021"},
    {id: 6, state: "active", name: "Books", created: "May 17, 2021", category: "Task", content: "The Lean Startup 2", dates: ""}
];

import { displayNote }  from "./displayNote.js";
import { editNote } from "./editNote.js";
import { displayCategories } from "./displayCategories.js";

const notesTable = document.getElementsByClassName('notes__list');
const newNoteButton = document.querySelector('.notes__create');

export const displayNotes = (notesList) => {
    notesList
        .filter(note => note.state === "active")
        .map(note => displayNote(note.id, note.name, note.created, note.category, note.content, note.dates))
        .forEach(note => notesTable[0].insertAdjacentHTML('beforeend', note));
}


newNoteButton.addEventListener('click', () => {
    editNote(null, notes);
});

displayNotes(notes);
displayCategories(notes);