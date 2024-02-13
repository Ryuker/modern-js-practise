// Reverse String

// my method
function reverseString(str = 'bla') {
  return [...str].reverse().join('');
};

// Video Solutions

// Solution 1 - split version
// function reverseString2(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2 - For-of version
// function reverseString(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution 3 - reduce - we add the next character in front of the preceding one, reversing the order
// function reverseString(str) {
//   return str.split('').reduce((reversed, char) => {
//     // console.log(char, ':char ', reversed,':reversed:' );
//     return char + reversed
//   }, '');
// }

// function reverseString(str) {
//   return str.split('').reduce((reversed, char) => char + reversed,'');
// }

module.exports = reverseString;