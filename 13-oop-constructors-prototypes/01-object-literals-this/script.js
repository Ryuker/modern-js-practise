// Object Literals & This Keyword
const rectangle = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
  area: function() { 
    // '.this' refers to the object this function is called in
    return this.width * this.height; 
  }
};

const rectangle2 = {
  name: 'Rectangle 2',
  width: 30,
  height: 20,
  area: function() { 
    // '.this' refers to the object this function is called in
    return this.width * this.height; 
  }
};


// The weakness of the above approach is that we need to declare a new object literal for each rectangle. For large quantities this approach doesn't scale well. 


console.log(rectangle2.area());
