// using 'Object.create()' to add methods to a prototype

// Previous way
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
  return 2 * (this.width * this.height);
};

Rectangle.prototype.isSquare = function() {
  return this.width === this.height;
};

const rect = new Rectangle(4,4);
console.log(rect.isSquare(), rect.area());

// Other way
// - The benefit of this method is that you don't have to call .prototype.your_method() since you're creating a custom prototype
const rectanglePrototypes = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width * this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  }
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height
    },
    width: {
      value: width
    }
  });
}

const rect1 = createRectangle(10, 20);

console.log(rect1);
console.log(rect1.area());  // so here you can just do .your-method()

const rect2 = createRectangle(20, 20);
console.log(rect2);
console.log(rect2.area(), rect2.isSquare());