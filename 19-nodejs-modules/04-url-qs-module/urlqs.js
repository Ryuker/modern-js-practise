const url = require('url');
const querystring = require('querystring');

// url.parse() - parses url to an object
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

// url.format() - formats object to an url string
const myUrl2 = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: 'listing',
  query: {
    id: 1000,
    premium: true
  }
});

console.log(myUrl2);

// querystring.parse() - return a query as an object
const myQs = 'year=2023&month=january&day=20'
const q = querystring.parse(myQs);
console.log(q);
console.log('month: ' + q.month);

// querystring.stringify()
const myQs2 = querystring.stringify({
  year: 2023,
  month: 'january',
  day: 20
});

console.log(myQs2);


