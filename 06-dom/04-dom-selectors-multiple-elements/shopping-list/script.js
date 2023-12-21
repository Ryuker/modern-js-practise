// DOM selectors multiple elements
// querySelectorAll()
const listItems = document.querySelectorAll('.item'); // gives a node list
// nodelist - you can use high level array methods on this list
console.log('Full node list:')
console.log(listItems);

console.log('Access single elements of list:');
console.log(listItems[1].innerText);

console.log('ForEach of node list:')
listItems.forEach(item => console.log(item.innerText));

// color all of the items red
// listItems.forEach(item => item.style.color = 'red');

// Remove the 2nd element - Change the first element to Oranges
// listItems.forEach((item,index) => {
//   if (index === 1) {
//     item.remove();
//   }
  
//   if (index === 0) {
//     item.innerHTML = ` Oranges 
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

// getElementsByClassname - HTML Collection of items with classname
console.log('getElementsByClassName: ')
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

console.log('forEach on array from HTML Collection:')
const listItemsArray = Array.from(listItems2); 
listItemsArray.forEach(item => console.log(item.innerText));

// getElementsByTagName - HTML collection of items with tag <li>
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);

// to forEach over the tags
console.log('forEach over the tags:')
const listItems3Array = Array.from(listItems3);
listItems3Array.forEach(item => console.log(item.innerText));

// recommended:
// - to use document.querySelector and querySelectorAll in most cases





