function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

// export default capitalizeWords;

function makeMoney(amount) {
  return `$${amount}`;
}

export {
  capitalizeWords,
  makeMoney
};