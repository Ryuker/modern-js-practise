// DOM selectors single element
// more practical and common way to select elements

// selecting single elements on the page
// document.getElementById
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

// by attribute
console.log(document.getElementById('app-title').getAttribute('id'));

// set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

// putting the element into a variable
const title = document.getElementById('app-title');
console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector
console.log(document.querySelector('h1'));  // selects the first h1 on page
console.log(document.querySelector('#app-title')); // selects the id
console.log(document.querySelector('.container')); // selects the container
// selects the text input
console.log(document.querySelector('input[type="text"]')); 
// select pseudo element
console.log(document.querySelector('li:nth-child(2)').innerText); 

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list  = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';










