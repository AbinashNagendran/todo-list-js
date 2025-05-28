import {renderList} from '../scirpts/manage-list.js'


let id_counter = JSON.parse(localStorage.getItem('id_counter')) || 0; 

const form = document.querySelector('.list-creation-form'); 
export let items =  JSON.parse(localStorage.getItem('items')) || [];

renderList();


form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const formData = new FormData(form); 
  const list_item = Object.fromEntries(formData.entries()); 
  list_item.id = id_counter; 
  id_counter++;
  list_item.status = 'UNCOMPLETED';
  items.push(list_item);
  

  console.log(list_item); 
  saveToStorage();
  renderList(); 

});

console.log(items);

function saveToStorage() {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('id_counter', JSON.stringify(id_counter));
}




