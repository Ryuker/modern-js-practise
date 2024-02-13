const hasDuplicateIds = require('./hasduplicateids')

describe('DOM Tree has Duplicate IDs', () => {
  let root;

  // Runs before a test, to prevent duplicate code
  beforeEach(() => {
    console.log('before each ran');
    // create mock elements
    root = document.createElement('div');
    
    // children
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');
    root.appendChild(child1);
    root.appendChild(child2);
  });

  // runs after the test
  afterEach(() => {
    console.log('after each ran');
    root = null;
  });

  // the tests
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
    // Add duplicate IDs
    root.id = 'root';
    root.children[0].id = 'child'
    root.children[1].id = 'child'

    const result = hasDuplicateIds(root);

    expect(result).toEqual(true);
  });

  it('should return false if there are no duplicate IDs', () => {
    // Add IDs
    root.id = 'root';
    root.children[0].id = 'child1'
    root.children[1].id = 'child2'

    const result = hasDuplicateIds(root);

    expect(result).toEqual(false);
  });
});