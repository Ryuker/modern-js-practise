const reverseString = require('../reversestring/reversestring');

// My solution
// function palindrome(str) {
//   return str == reverseString(str);
// }

// Video Solution
// Solution 1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Solution 2 - checks every char if it's the same as index from the opposite end of the array
// function palindrome(str) {
//   return str.split('').every((char, index) => {
//     return char === str[str.length - index -1];
//   });
// }

module.exports = palindrome;