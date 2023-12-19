// .forEach is a high level Array method
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(social.__proto__);

// long version
console.log('Long version');
socials.forEach(function(item) {
  console.log(item);
});

// shorthand
console.log('Shorthand version');
socials.forEach(item => console.log(item));

// other arguments we can pass in
console.log('Other arguments - item, index, arr');
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Passing in a function
console.log('Passing in a function'); 
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// forEach on an object array
console.log('forEach on an object array');
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com'},
  { name: 'Facebook', url: 'https://facebook.com'},
  { name: 'LinkedIn', url: 'https://linkedin.com'},
  { name: 'Instagram', url: 'https://instagram.com'}
];

// socialObjs.forEach();
socialObjs.forEach( item => console.log(item.url));
