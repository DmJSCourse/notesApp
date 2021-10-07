import { assignIcon } from "./assignIcon.js";

export function displayNote(id, name, createDate, category, content, dates) {
    let newNote = document.createElement("tr");
    newNote.setAttribute("id", id);
    newNote.className = "notes__item";

    return newNote.innerHTML = `
        <tr id="` + id + `" class="notes__item">` +
            `<td class="notes__icon">` + assignIcon(category) + `</td>` +
            `<td>` + name + `</td>` +
            `<td>` + createDate + `</td>` +
            `<td>` + category + `</td>` +
            `<td>` + content + `</td>` +
            `<td>` + dates + `</td>` +
            `<td>
                <button class="notes__edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="notes__archive">
                    <i class="fas fa-archive"></i>
                </button>
                <button class="notes__delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>` +
        `</tr>`;
}
