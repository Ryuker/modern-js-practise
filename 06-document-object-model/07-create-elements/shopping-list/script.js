// Create Elements
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// changing the text of a div
// div.innerText = 'Hello World';

// Appending a text node to a parent node - recommended
const text = document.createTextNode('Hello World');
div.appendChild(text);

document.body.appendChild(div); // appending it to body in the document

document.querySelector('ul').appendChild(div); // appending to ul (at the end)

console.log(div);

