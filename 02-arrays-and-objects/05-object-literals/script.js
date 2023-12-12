console.log('My solutions:');
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

console.log('Challenge 2:');
console.log(x);

// -------------
// Challenge solutions
console.log('Video solutions:');
// Challenge 1: 
const sArr = [1, 2, 3, 4, 5];

sArr.reverse();
sArr.push(0);
sArr.unshift(6);


console.log('Challenge 1:');
console.log(sArr);

// Challenge 1: 
const sArr1 = [1, 2, 3, 4, 5];
const sArr2 = [5, 6, 7, 8, 9, 10];

// solution 1:
const arr3 = sArr1.slice(0, 4).concat(arr2);

// solution 2:
const arr4 = [...sArr1, ...sArr2];
arr4.splice(4, 1);

console.log('Challenge 2:');
console.log(arr3);
console.log(arr4);

