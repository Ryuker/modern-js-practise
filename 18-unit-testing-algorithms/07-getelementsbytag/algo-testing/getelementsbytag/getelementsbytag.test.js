const getElementsByTag = require('./getelementsbytag')

describe('Get Elements By Tag', () => {
  it('should be a function', () => {
    expect(typeof getElementsByTag).toEqual('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });
  
  it('should an empty array if no root is passed in', () => {
    expect(getElementsByTag()).toEqual([]);
  });

});