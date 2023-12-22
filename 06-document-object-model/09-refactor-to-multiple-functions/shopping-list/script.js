// Clean & Performant 
function createNewItem(item) {
  console.log(`creating new item ${item}`);

  // initialization of elements
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button); // append the button to the li item

  // add li item it to the back of the list
  document.querySelector('.items').appendChild(li); 
}


/////////////
// Functions
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);  // append the i element to the button

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  
  return icon;
}

createNewItem('Cheese');
createNewItem('Sauce');




