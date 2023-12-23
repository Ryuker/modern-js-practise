// Remove Elements

// Remove()
function removeClearButton() {
  console.log('Removing the clear all button');
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

removeClearButton();

// RemoveChild()
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}

// removeFirstItem();

// removeItem - removes an item at specific item number
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

// removeItem(3);

// other way - using array instead of template string
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1]; // zero based
  ul.removeChild(li);
}

// removeItem2(1);

// other way - using array without accessing parent
function removeItem3(itemNumber) {
  const lis = document.querySelectorAll('li');
  lis[itemNumber - 1].remove();
}

removeItem3(1);

// shorter version
const removeItem4 = (itemNumber) => {
  document.querySelectorAll('li')[itemNumber -1].remove();
};

removeItem4(1);

