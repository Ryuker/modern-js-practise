let x;
const arr = [34, 55, 95, 20, 15];

arr.push(100);    // add item to end of array
arr.pop();        // remove last item in array

arr.unshift(99);  // add item to start of the array
arr.shift();      // remove first item in array

// arr.reverse();

x = arr.includes(20);
x = arr.includes(200);

x = arr.indexOf(15);
x = arr.indexOf(340); // return -1 if the item does not exist in the array

x = arr.slice(1); // creates new array starting with from the index specified

// creates new array starting from the index and ending at the end index
x = arr.slice(1, 4); 

// plucks the values from start index into a new array
// x = arr.splice(1, 4); 

// removes the elements starting at startIndex from the array
//x = arr.splice(3, 1); 

// chaining methods
x = arr.splice(1, 4).reverse().toString().charAt(0);



console.log(arr);
console.log(x);