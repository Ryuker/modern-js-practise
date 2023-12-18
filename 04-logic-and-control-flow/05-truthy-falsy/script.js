// a string with anything in it is a truthy value.
const email = 'test@test.com';

// this is true
if (email) {
  console.log('You passed an email');
}

// Anything that isn't falsy is truthy
// Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

const x = true;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(x);

// Truthy
// - true
// - ' ' or " "
// - []
// - {} 
// - function(){}

// Truthy and Falsy caveats
const children = 0;

// only run if children is a number
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// ensure the 0 is also shown as a number
if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty array
// const posts = ['Post One', 'Post Two'];
const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Check for empty objects
// const user = {
//   name: 'Brad'
// };
const user = {};

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loosy Equality (==)
// this is true
console.log(false == 0);  // true 
console.log('' == 0);     // true
console.log(null == 0);   // false

// triple Equals (===) 
console.log(false === 0);  // false
console.log('' === 0);     // false
console.log(null === 0);   // false