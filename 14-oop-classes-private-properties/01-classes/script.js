// Classes Intro
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {    // class methods don't use the 'function' keyword
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width * this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}


const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea();

console.log(Object.getPrototypeOf(square));