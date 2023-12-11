// arrays are zero based
let x;

// Array Literal
const numbers = [12, 33, 29, 39, 102];
const mixed = [12, 'Hellow', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[2]}`;
x = numbers.length;

//  mutate array (change key value)
fruits[2] = 'pear';

fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry'; // adds an item to the array

console.log(numbers);
console.log(fruits);
console.log(x);
