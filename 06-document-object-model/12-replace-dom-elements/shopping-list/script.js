// Replace DOM Elements
function replaceFirstItem() {
  const firstItem = document.querySelector('li');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

replaceFirstItem();

// Replace Second Item - using OuterHTML

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceSecondItem();

// Replace all of the items in the list
function replaceAllItems() {
  const items = document.querySelectorAll('li');

  items.forEach((item, index) => {

    index === 1 
      ? item.innerHTML = 'Second Item' 
      : item.innerHTML = 'Item';

    // item.outerHTML = '<li>Replaced All</li>';
      
  });
}

replaceAllItems();

// ReplaceChild
function replaceChildHeading () {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');
  
  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';

  header.replaceChild(h2, h1);
}

replaceChildHeading();






