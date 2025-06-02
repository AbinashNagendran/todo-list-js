import {renderList} from '../scirpts/manage-list.js'


let id_counter = JSON.parse(localStorage.getItem('id_counter')) || 0; 

const form = document.querySelector('.list-creation-form'); 
export let items =  JSON.parse(localStorage.getItem('items')) || [];


if (items.length > 0){
  renderList();
}
else {
  id_counter = 0;
}



form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const formData = new FormData(form); 
  const list_item = Object.fromEntries(formData.entries()); 
  console.log(list_item);
  list_item.id = id_counter; 
  id_counter++;
  list_item.status = 'uncompleted';
  items.push(list_item);
  

  saveToStorage();
  renderList(); 

});


export function saveToStorage() {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('id_counter', JSON.stringify(id_counter));
}


export function removeFromList(id) {
    const newList = [];
    let newQuantity = 0;

    items.forEach((item) => {
        if (item.id !== Number(id)) {
            newList.push(item);
            newQuantity++;
        }
    });
    items = newList;
    saveToStorage();
    return newQuantity;
}



