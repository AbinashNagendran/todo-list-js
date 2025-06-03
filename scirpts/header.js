import {items} from '../scirpts/create-section.js'
import {renderList} from '../scirpts/manage-list.js'

const buttonPrior = document.querySelector('.by_priority');
buttonPrior.addEventListener('click', () => {
    items.sort((a, b) => {
        if (a.priority > b.priority) return -1;
        if (a.priority < b.priority) return 1;
        return 0;
    });
    renderList();
    localStorage.setItem('items', JSON.stringify(items));

});

const buttonDate = document.querySelector('.by_date_added');
buttonDate.addEventListener('click', () => {
    items.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });
    renderList();
    localStorage.setItem('items', JSON.stringify(items));

});

const buttonDue = document.querySelector('.by_due_date');
buttonDue.addEventListener('click', () => {
    items.sort((a, b) => {
        if (a.date_end < b.date_end) return -1;
        if (a.date_end > b.date_end) return 1;
        return 0;
    });
    localStorage.setItem('items', JSON.stringify(items));
    renderList();
    
});




