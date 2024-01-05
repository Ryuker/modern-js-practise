// Shopping List
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('.btn');

// App state
let isEditMode = false;
let selectedItem = '';

getItemsFromStorage();


function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  
  // Add items from storage to the DOM
  itemsFromStorage.forEach(item => addItemToDOM(item));
  checkUI();
}

function onSubmit(e) {
  e.preventDefault();

  // check if we are in edit mode
  if (isEditMode){
    // update the item 
    updateItem();
  } else {
    addItem();
  }

  checkUI();
}

function addItem(e) {
  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  // Create button with icon
  const button = createButton('remove-item btn-link text-red');

  // Nest button in new list item
  li.append(button);

  // prepend new li to item list (at the top)
  itemList.prepend(li);
}

function replaceItemInDOM(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  // Create button with icon
  const button = createButton('remove-item btn-link text-red');

  // Nest button in new list item
  li.append(button);
  
  itemList.replaceChild(li, selectedItem);
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);
  
  // convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter(i => i !== item);

  // Re-set to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));

}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else  {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

function replaceItemInStorage(item, itemToReplace) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out item to be replaced
  const newItems = itemsFromStorage.map(i => {
    if (i === itemToReplace.textContent) {
      return item;
    } else {
      return i;
    }
  });

  localStorage.setItem('items', JSON.stringify(newItems));
}

// function onClickItemFromLocalStorage(item) {
//   localStorage.onClickItem(item);
// }

function onClickItem(e) {

  // check if the element has remove item as class
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }

  // check if we clicked on element to specify we want to edit the item
  // call update item
}

function setItemToEdit(item) {

  isEditMode = true;

  // reset all li element classes
  itemList.querySelectorAll('li').forEach(item => {
    item.classList.remove('edit-mode');
  })

  // change selected item appearance
  item.classList.add('edit-mode');
  
  // Change button to greend and update icon and text
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update item';
  formBtn.style.backgroundColor = '#228B22';
  
  // change input field to item content
  itemInput.value = item.textContent;
}

function setItemToAddMode() {
  selectedItem = '';
  isEditMode = false;

  // reset all li element classes
  itemList.querySelectorAll('li').forEach(item => {
    item.classList.remove('edit-mode');
  })
  
  // Change button to greend and update icon and text
  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style = '';
}

function updateItem() {
  selectedItem = itemList.querySelector('.edit-mode');
  const item = itemInput.value;

  replaceItemInStorage(item, selectedItem);
  replaceItemInDOM(item);
}

function removeItem(item) {
    if(confirm('Are you sure?')) {
      // Remove item from DOM
      item.remove(); // remove the li

      // Remove item from storage
      removeItemFromStorage(item.textContent);

      checkUI();
    }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  } 

  // Clear from local storage
  localStorage.removeItem('items');

  checkUI();
}

function filterItems(e) {
  // get a the items in the list
  const items = itemList.querySelectorAll('li');

  // get the text input from the filter
  const text = e.target.value.toLowerCase();
  
  items.forEach(item => {
    const itemName = item.firstChild.textContent.toLowerCase();

    // filters based on itemName 
    //- '-1' means the total of chars is not in there
    if (itemName.indexOf(text) != -1 ) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function resetUI(e) {
  if(e.target.classList.contains('form-control') || e.target.tagName === 'HTML'){
    checkUI();
  }
}


function checkUI() {
  itemInput.value = '';
  const items = itemList.querySelectorAll('li');

  // display if there are items in the list
  if (items.length === 0) {
    // no items in the list - don't display
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    // items in the list - display
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  setItemToAddMode();
}

// initialize app
function init(){
  // Event Listeners
  itemForm.addEventListener('submit', onSubmit);

  // add event delegate for each X button
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);

  document.addEventListener('DOMContentLoaded', displayItems);

  // handle click outside of button elements to reset UI
  document.addEventListener('click', resetUI);

  checkUI();
}

init();

////////////////////
// Create Functions
////////////////////
function createButton(classes) {
  // Create button with classes
  const button = document.createElement('button');
  button.className = classes;
  
  // create icon and append
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  // create icon with classes
  const icon = document.createElement('i');
  icon.className = classes; 
  return icon;
}


