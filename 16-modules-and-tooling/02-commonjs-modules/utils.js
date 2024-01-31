
// Method 1
// const message = {
//   id: 1,
//   text: 'Hello World'
// };

// module.exports = message;

// Method 2
// module.exports = {
//   id: 1,
//   text: 'Hello World'
// };

function capitalizeWords(str) { 
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ')
}

function makeMoney(amount) {
  return `$${amount}`;
}

module.exports = { 
  capitalizeWords, 
  makeMoney 
};