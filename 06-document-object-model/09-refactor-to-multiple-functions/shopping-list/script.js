// My Solution



// Quick & Dirty
function createListItem(item){
  const li = document.createElement('li');

  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;

  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');


// Clean & Performant 
function createNewItem(item) {
  console.log(`creating new item ${item}`);

  // initialization of elements
  const li = document.createElement('li');
  const button = document.createElement('button');
  const icon = document.createElement('i');

  // add classes to the button and i element
  button.className = 'remove-item btn-link text-red'; 

  icon.className = 'fa-solid fa-xmark';
  button.appendChild(icon);  // append the i element to the button

  li.appendChild(document.createTextNode(item));
  li.appendChild(button); // append the button to the li item

  // add li item it to the back of the list
  document.querySelector('.items').appendChild(li); 
}

createNewItem('Cheese');




