// Challenge 1:
// use some of the array methods that we looked at to mutate the following to expected result below

const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log('Challenge 1:')
console.log(arr);

// Challenge 2:
// Combine arr1 and arr2 into a new array called arr3 with the following elements
let x;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

x = arr1.slice(0, arr1.indexOf(5));
x = x.concat(arr2);

console.log(x);

// -------------
// Challenge solutions
// Challenge 1: 


