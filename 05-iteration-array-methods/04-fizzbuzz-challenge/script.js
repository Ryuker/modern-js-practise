// FizzBuzz Challenge
// - print/log the numbers from 1 to 100
// - for 'multiples of three' print "Fizz" instead of the number
// - for 'multiples of five' print 'Buzz'
// - For numbers which are 'multiples of both three and five' print 'FizzBuzz'

// My Solution
console.log('My Solution')
console.log(15 % 3);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0 ) {
    console.log('FizzBuzz - ' + i );
  }else if (i % 3 === 0 ) {
    console.log('Fizz - ' + i);
  } else if (i % 5 === 0 ) {
    console.log('Buzz - '  + i);
  } else {
    console.log(i);
  }
}

// Video Solution
console.log('Video Solution - For version');
for (let i = 1; i <= 100; i++) {

  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// While loop version
console.log('Video solution - While version')
let j = 1;
while(j <= 100) {

  if (j % 15 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if(j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }

  j++;
}