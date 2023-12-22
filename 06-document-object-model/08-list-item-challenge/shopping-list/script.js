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
  console.log('creating new item');
}

createNewItem();




