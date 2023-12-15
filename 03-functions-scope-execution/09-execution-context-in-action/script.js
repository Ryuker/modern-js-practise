// Execution Context
// - When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the execution context.
// - it contains the currently running code and everything that aids its execution.
// - there is a global execution context as well as a function execution context for every function invoked.

// Javascript is single threaded and synchronous.
// - there are async abilities but at it's core it's single threaded and synchronous.

// Execution Context Phases
// Memory Creation Phase
// 1. Create the global object (browser = window, Node.js = global)
// 2. Create the 'this' object and bind it to the global object
// 3. Setup memory heap for storing variables and function references
// 4. Store functions and variables in global execution context and set to "undefined"

// Execution Phase:
// 1. Execute code line by line
// 2. Create a new execution context for each function call