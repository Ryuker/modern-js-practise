// Event Listeners

// not recommended method - is not flexible & is security risk
// in HTML 
/*- 
  <button onclick="onClear()" id="clear" class="btn-clear">
    Clear All
  </button>
 */
function onClear(){
  alert('Clear Items from named function');
}
// Above method clutter it up to much an can be inserted into

// Javascript event listener
// const clearBtn = document.querySelector('#clear');
// clearBtn.onclick = () => {
//   alert('Clear Items');
// };

// Most modern way - using an addEventListener method
// clearBtn.addEventListener('click', function() {
//   alert('Clear Items');
// });

// shorter version
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// You can have as many event listeners as you want on the same event
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

// We can also use a named function 
// clearBtn.addEventListener('click', onClear);

// remove event listener - removes after x seconds
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000 );

// trigger event programatically
// setTimeout(() => clearBtn.click(), 5000); // clicks the clear button

// clear the items in the list
// my solution

// 1 - clear all items
const clearBtn = document.querySelector('#clear');

function clearAll() {
  console.log('clear all items from the list');
  const ils = document.querySelectorAll('li');
  ils.forEach(item => item.remove());
}

clearBtn.addEventListener('click', clearAll);

// 2 - Clear item 1
const clearItem1Btn = document.querySelector('#clear-first-item');

function clearItem1() {
  ils = document.querySelectorAll('li');
  ils[0].remove();
}

clearItem1Btn.addEventListener('click', clearItem1);

// 3 - Clear item at specified index
const clearItemAtIndexBtn = document.querySelector('#clear-item-at-index');
function clearItemAtIndex(index) {
  ils = document.querySelectorAll('li');
  ils[index].remove();
}
clearItemAtIndexBtn.addEventListener('click', () => clearItemAtIndex(2));


// Video solution 
// 1 - easy way
const clearV1Btn = document.querySelector('#clear-v-1');
function onClear() {
  const itemList = document.querySelector('ul');
  itemList.innerHTML = '';
}
clearV1Btn.addEventListener('click', onClear);

// 2 - itemlist
const clearV2Btn = document.querySelector('#clear-v-2');

function onClear2() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  items.forEach(item => item.remove());
}

clearV2Btn.addEventListener('click', onClear2);

// 3 - using a while loop - most performant
const clearV3Btn = document.querySelector('#clear-v-3');

function onClear3() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  while(itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

clearV3Btn.addEventListener('click', onClear3);









