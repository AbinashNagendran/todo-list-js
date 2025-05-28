import {items} from '../scirpts/create-section.js'
export function renderList() {
    let listHTML = `<p class="create-list-item-header">THE LIST</p>`;
    items.forEach((item) => {
        listHTML+= `
        <div class="list-item">
            <header>${item.name}</header>
            <div class="list-item-content">
                <div class="list-item-desciption">
                    <p>${item.desciption}</p>
                    <button class="action-buttons complete"><h3>UNCOMPLETED</h3></button>
                    <button class="action-buttons destroy"><h3>ANNIHILATE</h3></button>
                </div>
                <div class="list-item-details">
                    <p>Start Date: ${item.date_start}</p>
                    <p>Due Date: ${item.date_end}</p>
                    <p>Duration: ${item.hours}h ${item.minutes}m</p>
                    <p>Priority: ${item.priority}</p>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector('.list-items-container').innerHTML = listHTML;
}
