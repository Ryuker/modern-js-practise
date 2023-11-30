// Primitive vs Reference types
// ----------------------------
// Primitive Types: stored directly in the "stack", where it is accessed from
// String | Number | Boolean | Null | Undefined | Symbol | BigInt

// Reference Types: stored in the heap and accessed by reference
// Arrays | Functions | Objects

// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person =  {
  name: 'Brad'
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);







