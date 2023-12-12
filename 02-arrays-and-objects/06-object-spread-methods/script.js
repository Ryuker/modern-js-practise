let x;
// const todo = {};
const todo = new Object();

// adding items
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// nesting
const person = {
  address: {
    coords: {
      lat: 42.3423,
      lng: -71.212616
    }
  }
}

x = person.address.coords.lat;

// spreading objects
const obj1  = { a: 1, b: 2 };
const obj2  = { c: 3, d: 2 };

const obj3 = {...obj1, ...obj2};

x = obj3;

// assigning properties from objects to an empty object
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

// array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;

// create array from object keys
x = Object.keys(todo);
x = Object.keys(todo).length; // get the length of the object using the array

// create from object values
x = Object.values(todo);

// create array with nested arrays with object key value pairs
x = Object.entries(todo);

// Check if a property exists in an object
x = todo.hasOwnProperty('name');


console.log(x);