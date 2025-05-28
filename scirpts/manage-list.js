import {items, removeFromList} from '../scirpts/create-section.js'
export function renderList() {
    let listHTML = `<p class="create-list-item-header">THE LIST(${items.length})</p>`;
    items.forEach((item) => {
        listHTML+= `
        <div class="list-item js-item-container-${item.id}">
            <header>${item.name}</header>
            <div class="list-item-content">
                <div class="list-item-desciption">
                    <p>${item.desciption}</p>
                    <div>
                        <button class="action-buttons complete"><h3>COMPLETED?</h3></button>
                        <button class="action-buttons destroy js-delete-link" data-item-id="${item.id}"><h3>ANNIHILATE</h3></button>
                    </div>
                </div>
                <div class="list-item-details">
                    <p><strong>Start Date:</strong> ${item.date_start}</p>
                    <p><strong>Due Date:</strong> ${item.date_end}</p>
                    <p><strong>Duration:</strong> ${item.hours}h ${item.minutes}m</p>
                    <p><strong>Priority:</strong> ${item.priority}</p>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector('.list-items-container').innerHTML = listHTML;
    document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
        const itemId = link.dataset.itemId;
        let newQuantity = removeFromList(itemId); 
        if (newQuantity == 0) {
            document.querySelector('.list-items-container').innerHTML = '<p class="create-list-item-header">THE LIST</p><p>Empty List! Start adding list items on the left side. This is the <strong>worst</strong> kind of list</p>'
        }
        else {
            renderList();
            document.querySelector('.create-list-item-header').innerText = `THE LIST (${newQuantity})`;
        }



    });

  });
}



