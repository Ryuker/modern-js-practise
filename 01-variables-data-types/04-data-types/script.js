// Primitive Data Types
// ---------------------
// String | sequence of characters, must be in quotes or backticks
// Number | Integers as well as floating-point numbers
// Boolean| Logical entity / true or false
// Null   | Intentional absense of any object value
// Undefined | A variable that has not yet been defined / assigned
// Symbol | Built-in object whose construcor returns a unique symbol
// BigInt | Numbers that are greater than the "Number" type can handle

// Reference Types (Objects)
// -------------------------
// Reference types or "objects" are non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types.

// Static Typing vs Dynamic Types
// -------------------------
// Javascript is a dynamically-types language. 
// - we do not explicityly define the types for our variables.
// many other languages are statically typed (c, c++ and Java)
// Typescript is a superset of JavaScript, whic allow static typing.

// ---------------------------------------------

// String
const firstName = 'Sara';
// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 900029293039272837n;

// Reference Types
const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad'
};

function sayHello(){
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// Primitive vs Reference types
// ----------------------------
// Primitive Types: stored directly in the "stack", where it is accessed from
// String | Number | Boolean | Null | Undefined | Symbol | BigInt

// Reference Types: stored in the heap and accessed by reference
// Arrays | Functions | Objects









