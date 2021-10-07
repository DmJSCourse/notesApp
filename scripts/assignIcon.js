export function assignIcon(category) {
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
            throw "Passed incorrect category";
    };
    return iconHTML;
}
