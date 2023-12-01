const myString = 'developer';
let x;

x = myString[0].toUpperCase() + myString.slice(1);

console.log(x); // 'Developer'

// solution from video
const str = 'developer';
let myNewString;

// Solution 1
myNewString = str.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2
myNewString = str[0].toUpperCase() + myString.substring(1);

// Solution 2
myNewString = `${str[0].toUpperCase()}${myString.slice(1)}`;


console.log(myNewString);