// Shopping List
let output;

// deprecated - shows everything is this html collection (array like)
output = document.all;
output = document.all[8];     // gives us the body
output = document.all.length; // gives us the length of the array

output = document.documentElement; // gives us the html
output = document.head;            // gives us the head
output = document.body;            // gives us the body

// gives us a collection of everything in the head
output = document.head.children;   
// gives us a collection of everything in the body at the top level
output = document.body.children;   

output = document.doctype;        // gives us the doctype
output = document.domain;         // gives us the domain - deprecated
output = document.URL;            // gives us the full URL
output = document.characterSet;   // gives us the characterSet
output = document.contentType;    // gives us the contentType

// forms
output = document.forms;            // gives a HTML collection of forms
output = document.forms[0];         // gives a form at index
output = document.forms[0].id;      // gives a form's id
output = document.forms[0].method;  // gives a form method (standard: get)
output = document.forms[0].action;  // gives the page


// document.forms[0].id = 'new-id';    // changes id of the first form
// links
output = document.links;            // shows the links in the document
output = document.links[0];         // shows the first link in the document
output = document.links[0].href;    // shows the href of the link
output = document.links[0].href = 'https:facebook.com'; // change href
output = document.links[0].id = 'google-link';  // changes the id
output = document.links[0].className = 'google-class';  // changes the class
output = document.links[0].classList;  // shows the classes in a list

// images
output = document.images;     // shows a collection of the images 
output = document.images[0];  // shows first image
output = document.images[0].src;  // shows the src

// Logging a full collection using forEach
const forms = Array.from(document.forms);
forms.forEach(form => console.log(form));



console.log(output);