// Static Methods
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect1', 20, 20);
console.log(rect);
console.log(rect.area());

// Call a static method on a class, note you don't call it on the instance
console.log(Rectangle.getClass());  
