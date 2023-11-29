// Ways to declare a variable
// var, let, const

// you probably won't see var much anymore
// let and const is primarily used these days

let firstName = 'John'; // < initalizes a variable, needs to be before used
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letter, numbers, underscores and dollar signs
// - can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Reassigning Variables
age = 31;

console.log(age);

let score;
score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// array example
const arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

// object example
const person = {
  name: 'Brad'
};

person.name = 'John';
person.email = 'brad@gmail.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10, e = 20, f = 30; // single line multi declares

console.log(d);










