// arrow functions were introduced in the ES15 update
// normal function declaration
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

// arrow function expression
const add2 = (a, b) => {
  return a + b;
};

console.log(add2(1,2));

// shorter version - with an implicit return
const subtract = (a, b) => a - b;

console.log(subtract(10,5));

// other shorter way 
// -  if there's only one paramater, parantheses can be omitted
const double = a => a * 2;

console.log(double(10));

// Returning an object 
// - requires parantheses around the implicit returned object
const createObj = () => ({
  name: 'Brad'
});

console.log(createObj());


// array function in a callback
console.log('Function in a callback')
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  console.log(n);
});

// shorter version of callback
console.log('Arrow function in a callback')
numbers.forEach(n => console.log(n));