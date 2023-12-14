// IIFE - Immediately Invoked Function Expression
// - used to avoid global scope polution


(function ()  {
  const user = 'John';
  console.log(user);

  const hello = () => console.log('Hello from the IIFE');
  hello();
})(); 

(function(name) {
  console.log('Hello ' + name);
})('Shawn');

(function hello() {
  console.log('Hello');
})();


