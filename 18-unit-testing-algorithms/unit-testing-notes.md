# Unit Testing Algorith Notes

## What are algorithms?
-  A set of rules to get an expected output from the input(s)  
order: 
`[Input] > <Algorithm> > [Output]`
- Solving Algorithms is a scale that take time to develop

## What is Unit Testing?
- A way of testing individual pieces of code called 'units'
- Some variations of testing:  
Acceptance Testing, System Testing, Integration Testing, Unit Testing
- You write test scripts that does the action and then checks the output if it's correct.
  - If the function passes the test then it's working correctly
  - else there's a problem and that needs to be adressed

- There's various frameworks for Unit Testing, we're using 'Jest' in this course

## Jest
- is very popular, has a lot of tutorials and documentation

## Getting Started with Jest
setup:
```JS Terminal
$npm init -y  // -y creates a package.json file without having to through config
$npm i -D jest
```
``` JS package.json
"scripts": {
    "test": "jest"
  },
```
- Create a sum.js file and a sum.test.js
  - It's common to write the test first.

To Run:
``` JS Terminal
$npm run test
``` 

## Grouping Tests Together

## Reverse String
- Often shows up on job interviews
- is supposed to return a string
- requires conversion to an array, then reversing the array elements and then converting it back to an array
- there are multiple solutions to it

## Palindrome Algorithm
- 


