// Literals vs Constructors
const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing - JavaScript adds a wrapper onto a literal to turn it into an object so it can change it's value to uppercase (for example)
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing - change the object back into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

// When you use a property or methods from an object it first looks at the objects properties and methods and then it will look into it's inherited prototype properties and methods.


console.log(strLit.constructor);
console.log(strObj.constructor);

// check if the object is an instance of the constructor function
console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
// Number, Boolean, String are primitives
// Array are Objects
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

// Some weird stuff
const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit);
console.log(funcLit(5));

// this also created a function, first is the parameter and the other is the function body
const funcObj = new Function('x', 'return x * x');

console.log(funcObj(3));

// this
const obj1 = {};
// is the same as this (behind the scenes javascript make it an instance
const obj2 = new Object();



