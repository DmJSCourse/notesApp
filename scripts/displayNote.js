export function displayNote(id, name, createDate, category, content, dates) {
    let newNote = document.createElement("tr");
    newNote.setAttribute("id", id);
    newNote.className = "notes__item";

    let iconHTML = "";
    switch (category) {
        case 'Idea': 
            iconHTML = `<i class="fas fa-lightbulb"></i>`;
            break;
        case 'Task':
            iconHTML = `<i class="fas fa-tasks"></i>`;
            break;
        case 'Random Thought':
            iconHTML = `<i class="fas fa-head-side-virus"></i>`;
            break;
        default:
            throw "Passed incorrect category to note";
    };

    return newNote.innerHTML = `
        <tr id="` + id + `" class="notes__item">` +
            `<td>` + iconHTML + `</td>` +
            `<td>` + name + `</td>` +
            `<td>` + createDate + `</td>` +
            `<td>` + category + `</td>` +
            `<td>` + content + `</td>` +
            `<td>` + dates + `</td>` +
            `<td>` + " " + `</td>` +
        `</tr>`;
}
