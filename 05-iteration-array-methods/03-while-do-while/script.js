// While
console.log('While Loop')
let i = 0;
while(i <= 20) {
  console.log('Number ' + i);
  i++;
}

// Best practise
// - Use a for loop when you know how many times the loop should run
// - Use a while loop when the number of times is unknown
// ! it's not a mandatory convention but just a best practise

// Loop over arrays
console.log('Loop over arrays')
let j = 0;
const arr = [10, 20, 30 , 40];

while (j < arr.length) {
  console.log(arr[j]);
  j++;
} 

// Nesting while loops
console.log('Nesting while loops');
let k = 1;

while (k <= 5) {
  console.log('Number ' + k );
  let l = 1; 
  while (l <= 5) {
    console.log(`${k} * ${l} = ${k * l}`);
    l++;
  }
  k++;
}

// Do While Loop - runs once and then it checks if it needs to run again
let z = 1;
console.log('Do While Loop');
do {
  console.log('Number ' + z);
  z++;
} while (z <= 20 );