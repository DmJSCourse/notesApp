import { assignIcon } from "./assignIcon.js";

export const displayCategories = (notesList) => {
    const categoriesTable = document.getElementsByClassName('categories__list');
    categoriesTable[0].innerHTML = '';

    const allCategories = [...new Set(notesList.map(note => note.category))];
    allCategories.forEach(category => {
        let activeCount = 0;
        let archivedCount = 0;
        for(let note of notesList) {
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
            <tr class="categories__item">
                <td class="categories__icon">` + assignIcon(category) + `</td>` +
                `<td>` + category + `</td>` +
                `<td>` + activeCount + `</td>`+
                `<td>` + archivedCount + `</td>
            </tr>`
        );
    })
}