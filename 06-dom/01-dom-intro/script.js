// D.O.M - Document Object Model
// - A Programming Interface for web/HTML elements
// - A Structure that we can interact with via JavaScript
// - Includes tags, attributes, text nodes etc
// - Represented as tree structure

//console.log(window);
//console.log(window.document); // Shows the document

console.dir(window.document); // Shows the methods of the document

// console.log(document.body.innerHTML); // Shows the innerHTML of the body

// Using properties
console.log(document.links[0]); // Show the first link in the document

// Replace the body with this text
// document.body.innerHTML = '<h1>Hello World</h1>'; 

// Methods - Write 
// document.write('Hello from JS'); // puts it at the end of the file

// Methods - getElementById
console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>';

// Methods - querySelector
// example just changes the h1
document.querySelector('#main h1').innerText = 'Hello';




