// Challenge 1: 
// - Create a function called getCelcius() that takes a temperature in fahrenheit as an argument and returns the temperature in celcius
// - for bonus points, write it as a one line arrow function

console.log('Challenge 1: Fahrenheit to Celcius')
const getCelcius = f => (f - 32) *  5 / 9;

console.log(getCelcius(32), 'Celcius');
console.log(`The temperature is ${getCelcius(32)} \xB0C`);

// Video solution of Challenge 1: 
console.log('Challenge 1 video solution');
function getCelciusV (f) {
  const celcius = (f - 32) * 5 / 9;
  return celcius;
}
console.log(`The temperature is ${getCelcius(32)} \xB0C`);


// Challenge 2:
console.log('Challenge 2: Min Max from Array');
// - create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array

const arr = [1, 2, 3, 4, 5];

const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(`Min: ${minMax(arr).min}`, `Max: ${minMax(arr).max}`);

// Video solution of Challenge 2:
console.log('Video Solution');
function minMaxV (arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  console.log(min);
  console.log(max);

  return {
    min,
    max
  };
}

console.log(minMaxV([1, 2, 3, 4, 5]));

// Challenge 3:
console.log('Challenge 3: IIFE');
// - create an IIFE (Immediately Invoked Function Expression)
// - that takes in the length and width of a rectangle and outputs it to the console in a message as soon as the page loads
((length, width) => {
  console.log(`width: ${width}`, `height: ${length}`);
  console.log(`The area of a rectangle with a lenght of ${length} and a width of ${width} is ${length * width}`);
})(10, 20);

// single line version
((length, width) => console.log(`W: ${width} L: ${length} A: ${width * length}` ))(10, 20);

// shortest version
((l, w) => console.log(`L:${l} W: ${w} A: ${l * w}`))(10,20);

// Video solution of Challenge 3:
console.log('Video Solution');
((width, lenght) => {
  const area = lenght * width;
  
  const output = `The area of a rectangle with a length of ${lenght} and a width of ${width} is ${area}`;
  
  console.log(output);
})(10, 20);



