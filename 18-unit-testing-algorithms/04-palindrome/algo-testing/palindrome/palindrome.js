const reverseString = require('../reversestring/reversestring');

function palindrome(str) {
  return str == reverseString(str);
}

module.exports = palindrome;