// Sealing & Freezing Objects

// Sealing - prevents properties from being added or removed. Can still be changed

// Freezing - Prevents properties from being added, removed or changed

// Sealing - can change the value of a property but not add / delete properties
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10
}

Object.seal(rectObj); // changes configurable to false on all properties

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

// console.log(descriptors);

rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 20;

console.log(rectObj);


// freezing - we can't add properties and can't modify existing properties
// - this also seals the object
const circleObj = {
  name: 'Circle 1',
  radius: 30
}

Object.freeze(circleObj);

circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);

// isSealed
console.log('rectObj is sealed? ' + Object.isSealed(rectObj));
console.log('rectObj is frozen? ' + Object.isFrozen(rectObj));

console.log('circleObj is sealed? ' + Object.isSealed(circleObj));
console.log('circleObj is frozen? ' + Object.isFrozen(circleObj));