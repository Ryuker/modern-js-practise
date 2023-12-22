// Video Solution

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}


// Usage
const li = document.createElement('li');
li.textContent = 'Insert Me After';

// some setup

// append button to li item
const button = createButton('remove-item btn-link text-red');
li.appendChild(button);

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// insert the element after the first element
insertAfter(li, firstItem);




////////////////////////
// Helper methods
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

