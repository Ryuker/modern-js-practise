// Traversing The DOM
let output;
const parent = document.querySelector('.parent');

console.log(parent);
console.log('Access children by parent:')
output = parent.children;

output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
console.log('Access parent by child:')
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
console.log('Sibling elements:')
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';


console.log(output);
