// Constructor Functions

// Constructor function - First letter is always uppercase
function Rectangle(name, width, height) { 
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  }

}

// This creates an empty object of type Rectangle (sort of an instance?)
// When we use new:
// 1. A new object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'this' keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.
const rect1 = new Rectangle('Rectangle 1', 10, 10);   

console.log(rect1.name, 'name');
console.log(rect1.area(), 'area');

const rect2 = new Rectangle('Rectangle 2', 20, 10);
const rect3 = new Rectangle('Rectangle 3', 30, 30);

console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());

// Some methods
console.log(rect1.constructor);          // check the contstructor function
console.log(rect1 instanceof Rectangle); // check if it's the type


