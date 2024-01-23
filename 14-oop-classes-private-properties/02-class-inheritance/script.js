// Class Inheritance

// Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('Shape Name: ' + this.name);
  }
}

// Child Class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);    // calls the parent constructor

    this.height = height;
    this.width = width;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = radius;
  }

  logName() {
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle('Rect1', 20, 20);
console.log(rect);
rect.logName();


const circ = new Circle('Circle1', 40);
console.log(circ);
circ.logName();

// Childs are both an instance of the parent and the child
console.log(rect instanceof Rectangle);   // instance of the Child
console.log(rect instanceof Shape);       // instance of the Parent