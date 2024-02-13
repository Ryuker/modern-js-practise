const hasDuplicateIds = require('./hasduplicateids')

describe('DOM Tree has Duplicate IDs', () => {
  it('should be a function', () => {
    expect(typeof hasDuplicateIds).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof hasDuplicateIds()).toEqual('boolean');
  });

  it('should return false if no root element is passed in', () => {
    expect(hasDuplicateIds()).toBeFalsy();
  });

  it('should return true if there are duplicate IDs', () => {
    // create mock elements
    const root = document.createElement('div');
    
    // children
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');
    root.appendChild(child1);
    root.appendChild(child2);

    // Add duplicate IDs
    root.id = 'root';
    child1.id = 'child'
    child2.id = 'child'

    const result = hasDuplicateIds(root);

    expect(result).toEqual(true);
  });
});