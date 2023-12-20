// Map - high level array method
console.log('Map version');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// Same with forEach
console.log('forEach version');
const doubledNumbers2 = [];
numbers.forEach(number => doubledNumbers2.push(number * 2));

console.log(doubledNumbers2);

// Companies map explorations
console.log('Companies map challenges');
console.log('Company filter challenges');
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
];

// Creat an array of company names
console.log('Array with just company names');
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with just company and categories
console.log('Array with just company name and categories');
const companyInfo = companies.map(company => ({
  name: company.name, 
  category: company.category
}));

console.log(companyInfo);

// Create an array of the length of each company in years
console.log('Array with company lenghts in years')
const companyYears = companies.map(company => ({
  name: company.name,
  length: company.end - company.start + ' years'
}));

console.log(companyYears);

// Chain map methods 
console.log('Chain map methods');
const squareAndDouble = numbers
  .map(number => Math.sqrt(number))
  .map(sqrt => sqrt * 2);

console.log(squareAndDouble);

// long version of chaining maps
console.log('Long version of chaining maps');
const squareAndDouble2 = numbers
  .map(function(number){
    return Math.sqrt(number);
  })
  .map(function(sqrt) {
    return sqrt * 2;
  })
  .map(function(sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble2);

// Chaining different methods
console.log('Chaining different methods');
const evenDouble = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2);

console.log(evenDouble);




