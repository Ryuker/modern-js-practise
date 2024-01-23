// Class Getters and Setters 
class Person {
  constructor(firstName, lastName) {
    // underscore means the property is private to the class
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter
  get firstName() { 
    // returns the property uppercased
    return this.capitalizeFirst(this._firstName);
  }

  // Setter always take in a single value that you want to set it to
  set firstName(value) {
    
    // ensure it's uppercased
    this._firstName = this.capitalizeFirst(value);
  }

  // Getter
  get lastName() { 
    // returns the property uppercased
    return this.capitalizeFirst(this._lastName);
  }

  // Setter always take in a single value that you want to set it to
  set lastName(value) {
    
    // ensure it's uppercased
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Capitalize first letter
  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName);

person1.firstName = 'joe';

console.log(person1);

person1.lastName = 'smith';

console.log(person1);

console.log(person1.fullName);