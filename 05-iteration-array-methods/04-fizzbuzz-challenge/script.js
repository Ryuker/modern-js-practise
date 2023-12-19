// Fizzbuzz Challenge
// - print/log the numbers from 1 to 100
// - for 'multiples of three' print "Fizz" instead of the number
// - for 'multiples of five' print 'Buzz'
// - For numbers which are 'multiples of both three and five' print 'FizzBuzz'

console.log(15 % 3);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0 ) {
    console.log('FizzBuzz - ' + i );
    continue;
  }else if (i % 3 === 0 ) {
    console.log('Fizz - ' + i);
    continue;
  } else if (i % 5 == 0 ) {
    console.log('Buzz - '  + i);
    continue;
  } else {
    console.log(i);
  }
}