// Challenge: 
// - Create a 'insertAfter()' function
// - first param: 'newEl' which is a new element created with .createElement
// - 2nd param: 'existingEl' which is a new element in the dom that you insert your new element after.

// My Solution
function insertAfter(newEl, existingEl) {
  const ul = document.querySelector('ul');
  const nextSibling = existingEl.nextSibling;
  ul.insertBefore(newEl, nextSibling);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.append(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// usage

// create list item
const li = document.createElement('li');
li.textContent = 'Insert Me After';

// append button to li item
const button = createButton('remove-item btn-link text-red');
li.appendChild(button);

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);

