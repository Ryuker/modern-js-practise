// Property Flags & Descriptors

// - When you create a new Object, all of these configurables are set to true by default

// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10
};


Object.defineProperty(rectObj, 'name', {
  writable: false,         // allow change of the value 
  configurable: false,     // allows modification and deletion
  enumerable: true         // allows it to be returned for...in loops
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'New Name';
delete rectObj.name;
console.log(rectObj);

for(let [key, value] of Object.entries(rectObj)){
  console.log(`${key}: ${value}`);
}

// get all descriptors of an object
console.log(Object.getOwnPropertyDescriptors(rectObj));
