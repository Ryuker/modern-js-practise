// Reverse String

// my method
function reverseString(str = 'bla') {
  return [...str].reverse().join('');
};

// Video Solutions
function reverseString2(str) {
  return str.split('').reverse().join('');
}

function reverseString3(str) {
  // return [...].
}

module.exports = reverseString;