import { displayNotes } from "./index.js";
import { displayCategories } from "./displayCategories.js";

const monthNames = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

function findDates(text) {
    let foundDates = [...text.matchAll(/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/g)];
    return foundDates.map(date => { 
        if (date[1].length === 1) {
            date[1] = "0" + date[1];
        };
        if (date[2].length === 1) {
            date[2] = "0" + date[2];
        };
        if (date[3].length === 2) {
            date[3] = "20" + date[3];
        };
       return date[1] + '/' + date[2] + '/' + date[3];
    }).join(', ');
}

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
            let timeStamp = monthNames[creationTime.getMonth()] + 
                ` ` + creationTime.getDate() + 
                `, ` + creationTime.getFullYear()
            ;

            list.push({
                id: list[list.length-1].id + 1,
                state: "active",
                name: name.value, 
                created: timeStamp, 
                category: category.value, 
                content: content.value, 
                dates: findDates(content.value),
            })
        } else {
            let editedItem = list.find(entry => entry.id === itemId);
            editedItem.state = "active";
            editedItem.name = name.value;
            editedItem.category = category.value;
            editedItem.content = content.value;
            editedItem.dates = findDates(content.value);
        }

    overlay.classList.add('hidden');
    document.getElementsByClassName('notes__list')[0].innerHTML = '';
    displayNotes(list);
    displayCategories(list);
    }, { once: true });
}
