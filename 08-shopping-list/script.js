// Shopping List
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  // Create button with icon
  const button = createButton('remove-item btn-link text-red');

  // Nest button in new list item
  li.append(button);

  // prepend new li to item list (at the top)
  itemList.prepend(li);

  // clear the item input value
  itemInput.value = '';
}


// Event Listeners
itemForm.addEventListener('submit', addItem);



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


