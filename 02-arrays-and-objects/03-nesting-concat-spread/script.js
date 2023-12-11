let x;

// nesting
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//fruits.push(berries);

// x = fruits[3];
// x = fruits[3][1]; // access array within array

const allFruits = [fruits, berries];

x = allFruits;
x = allFruits[1][0]; 

// concatenation - add items on the same level
x = fruits.concat(berries);


// Spread Operator (...) - spread the content of an array into an array
x = [...fruits, ...berries];

// Flatten Arrays - takes the items out of the nested arrays and puts them in the top array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object
x = Array.isArray('bla');
x = Array.from('12345'); // creates array from string

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // creates array of the values in variables


console.log(fruits);
console.log(x);