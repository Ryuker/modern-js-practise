// Shopping List
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

getItemsFromStorage();

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  
  // Add items from storage to the DOM
  itemsFromStorage.forEach(item => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

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

  // clear the item input value
  itemInput.value = '';
  checkUI();
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

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);
  
  // convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));

  console.log(localStorage.getItem('items'));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    console.log('Is not in local storage');
    itemsFromStorage = [];
  } else  {
    console.log('Is in local storage');
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

// function removeItemFromLocalStorage(item) {
//   localStorage.removeItem(item);
// }

function removeItem(e) {
  // check if the element has remove item as class
  if (e.target.parentElement.classList.contains('remove-item')) {
    if(confirm('Are you sure?')) {
      // console.dir(e.target.parentElement.parentElement.firstChild);
      e.target.parentElement.parentElement.remove(); // remove the li
      checkUI();
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  } 

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


function checkUI() {
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

}

// initialize app
function init(){
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);

  // add event delegate for each X button
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);

  document.addEventListener('DOMContentLoaded', displayItems);

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


