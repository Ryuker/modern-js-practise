const reverseString = require('./reversestring');

describe('Reverse String', () => {
  it('should be a funcion', () => {
    expect(typeof reverseString).toEqual('function');
  });

  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return a reversed string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

});