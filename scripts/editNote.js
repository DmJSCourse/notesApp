import { displayNotes } from "./index.js";

export function editNote(itemId, list) {
    const overlay = document.querySelector('.inputs'); 
    overlay.classList.remove('hidden');

    const category = document.querySelector('#category');
    const name = document.querySelector('#name');
    const content = document.querySelector('#content');
    const submitButton = document.querySelector('#okButton');
    const creationTime = new Date();

    if(!itemId) {
        category.value='Idea';
        name.value='';
        content.value='';
    } else {
        let note = list.find(entry => entry.id === itemId);
        category.value = note.category;
        name.value = note.name;
        content.value= note.content;  
    }

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        if(!itemId) {
            list.push({
                id: list[list.length-1].id + 1,
                state: "active",
                name: name.value, 
                created: creationTime.getMonth() + `,` + creationTime.getFullYear(), 
                category: category.value, 
                content: content.value, 
                dates: "",
            })
        } else {
            let editedItem = list.find(entry => entry.id === itemId);
            editedItem.state = "active";
            editedItem.name = name.value;
            editedItem.category = category.value;
            editedItem.content = content.value;
            editedItem.dates = "";
        }

    overlay.classList.add('hidden');
    document.getElementsByClassName('notes__list')[0].innerHTML = '';
    displayNotes(list);
    }, { once: true });
}
