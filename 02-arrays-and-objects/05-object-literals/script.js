let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main str',
    city: 'Boston',
    state: 'MA'
  },
  hobbies: ['music', 'sports']
};

// accessing object properties
x = person.name;  
x = person['age']; 

// accessing nested object properties
x = person.address.state;

// accessing array properties in objects
x = person.hobbies;
x = person.hobbies[0];

// update properties
x = person.name = 'Jane Doe';
x = person['isAdmin'] = false;

// add property
person.hasChildren = true;

// remove a property from an object
delete person.age;

// add function
person.greet = function(){
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();


// object with spaced name properties
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy'
};

x = person2['first name'];

// recommended method for multiword objects

const person3 = {
  'firstName': 'Tim',
  'lastName': 'Hennesy'
};

x = person3.firstName;



console.log(person);
console.log(x);
console.log(person2);
console.log(person3);