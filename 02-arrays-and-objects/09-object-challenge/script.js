// Object Challenge
console.log('Step 1:');
// Step 1:
const library = [
  {
    title: 'The Fellowship of the Ring', 
    author: 'J.R Tolkien', 
    status: {
      own: true,
      reading: false,
      read: false
    }
 },
  {
    title: 'The Two Towers', 
    author: 'J.R Tolkien', 
    status: {
      own: true,
      reading: false,
      read: false
    }
 },
  {
    title: 'Return of the King', 
    author: 'J.R Tolkien', 
    status: {
      own: true,
      reading: false,
      read: false
    }
 },
 
];

console.log(library);

// Step 2:
console.log('Step 2');
// finished reading all of the books, set the read value for all books to true

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Step 3:
console.log('Step 3:');
// destructure the title from the first book and rename the variable to firstBook
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4:
console.log('Step 4:')
// turn the library object into a JSON string
const str = JSON.stringify(library);

console.log(str);

// parse string to JSON
const object = JSON.parse(str);

console.log(object);



