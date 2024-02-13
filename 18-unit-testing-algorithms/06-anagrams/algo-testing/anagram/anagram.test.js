const anagram = require('./anagram');

describe('Anagrams', () => {
  it('is a function', () => {
    expect(typeof anagram).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });

  it('should return true if it is an anagram', () => {
    expect(anagram('ram', 'arm')).toBeTruthy();
    expect(anagram('iceman', 'cinema')).toBeTruthy();
    expect(anagram('god', 'dog')).toBeTruthy();
  });

  it('should return false if not an anagram', () => {
    expect(anagram('hello', 'fellow')).toBeFalsy();
    expect(anagram('world', 'twirl')).toBeFalsy();
    expect(anagram('god', 'lost')).toBeFalsy();
  });
})