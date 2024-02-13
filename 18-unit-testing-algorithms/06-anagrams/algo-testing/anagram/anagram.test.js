const anagram = require('./anagram');

describe('Anagrams', () => {
  it('is a function', () => {
    expect(typeof anagram).toEqual('function');
  });
})