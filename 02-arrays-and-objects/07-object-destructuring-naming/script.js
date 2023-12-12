const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// assigning variable as value to properties
const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
}

// shorthand
const person2 = {
  firstName,
  lastName,
  age
}

console.log(person);
console.log(person2);

// Destructuring
const todo = {
  id: 1,
  title: 'Take out trash',
  user: { name: 'John' }
}

const { id: todoID, title, user:  { name } } = todo;

console.log( todoID, title, name);

// Destructure arrays
const numbers = [23, 67, 33, 49];
// rest operator gives array of items left
const [first, second, ...rest] = numbers; 


console.log(numbers);
console.log(first, second, rest);


