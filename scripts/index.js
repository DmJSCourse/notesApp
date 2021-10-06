let notes = [
    {id: 0, state: "active", name: "Shopping list", created: "April 20, 2021", category: "Task", content: "tomatoes, bread", dates: ""},
    {id: 1, state: "active", name: "The theory of evolution", created: "April 27, 2021", category: "Random Thought", content: "The evolution", dates: ""},
    {id: 2, state: "active", name: "New feature", created: "May 05, 2021", category: "Idea", content: "Implement new feature 5/5/2021", dates: "5/5/2021"},
    {id: 3, state: "active", name: "William Gaddis", created: "May 07, 2021", category: "Task", content: "Lorem Ipsum", dates: ""},
    {id: 4, state: "active", name: "Books", created: "May 15, 2021", category: "Idea", content: "The Lean Startup", dates: ""},
    {id: 5, state: "active", name: "Books", created: "May 16, 2021", category: "Random Thought", content: "The Lean Startup 2", dates: "16/5/2021"},
    {id: 6, state: "active", name: "Books", created: "May 17, 2021", category: "Task", content: "The Lean Startup 3", dates: ""}
];

import { displayNote }  from "./displayNote.js";
import { editNote } from "./editNote.js";

const notesTable = document.getElementsByClassName('notes__list');
const categoriesTable = document.getElementsByClassName('categories__list');
const newNoteButton = document.querySelector('.notes__create');

export const displayNotes = (notesList) => {
    notesList
        .filter(note => note.state === "active")
        .map(note => displayNote(note.id, note.name, note.created, note.category, note.content, note.dates))
        .forEach(note => notesTable[0].insertAdjacentHTML('beforeend', note));
}

const displayCategories = () => {
    const allCategories = [...new Set(notes.map(note => note.category))];
    allCategories.forEach(category => {
        let activeCount = 0;
        let archivedCount = 0;
        for(let note of notes) {
            if (note.category === category) {
                switch (note.state) {
                    case 'active':
                        activeCount++;
                        break;
                    case 'archived':
                        archivedCount++;
                        break;
                    default:
                        throw "Invalid state";
                }
            }
        }

        categoriesTable[0].insertAdjacentHTML('beforeend', `
            <tr>
                <td></td>` +
                `<td>` + category + `</td>` +
                `<td>` + activeCount + `</td>`+
                `<td>` + archivedCount + `</td>
            </tr>`
        );
    })
}

newNoteButton.addEventListener('click', () => {
    editNote(null, notes);
});

displayNotes(notes);
displayCategories();