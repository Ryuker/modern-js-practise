// Object Properties
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function() {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width);

// We can also access properties with bracket notations
console.log(rect1['width']); 

// adding new properties to the instance
rect1.color = 'red';
// added new property with callback functions to the instance
rect2.perimeter = () => 2 * (rect2.width + rect2.height);

console.log(rect2.color);
console.log(rect2.perimeter());

// remove a property from an instance
delete rect2.perimeter;
console.log(rect2);

// Check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

// Get keys of the the object
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect2));

// Get entries - returns an array of arrays with a key value pair
console.log(Object.entries(rect1));

// Loop through the entries
console.log('Loop through entries of an object');
for (let [key, value] of Object.entries(rect1)){
  console.log(`${key} - ${value}`);
}

// -  with type checking - prevent logging a function for example
console.log('Loop through entries of an object with type checking');
for (let [key, value] of Object.entries(rect1)){
  // Only log if the value type is not a function
  if (typeof value !== 'function') { 
    console.log(`${key} - ${value}`);
  }
}






