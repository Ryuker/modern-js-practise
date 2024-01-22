// Prototypes
// A prototype is a special object where additional methods and properties can be attached and shared across all instances of its constructor function

// since a prototype is an object, it also has a prototype
// - This is called the prototype chain
// - (effectively these are inherited from the parent 'Object')

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect = new Rectangle('Rect 1', 10, 10);

console.log(rect);
console.log(Object.getPrototypeOf(rect));