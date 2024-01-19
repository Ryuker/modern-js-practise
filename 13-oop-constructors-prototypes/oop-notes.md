# 13 - Object Oriented Programming Notes
Focus on Constructors and Prototypes

# O.O.P Intro - what the section covers
1. What OOP is and it's principles
2. Object Literals
3. Constructor Functions
4. Prototypes
5. Prototype chain & inheritance
6. Object.create()
7. call() method

8. Classes
9. Inheritance / sub-classes
10. Static Methods
11. Getters & setters
12. Private properties
13. Flags & descriptors
14. Sealing & freezing

# What is OOP?
OOP/Object Oriented Programming is a programming paradigm or a way of thinking about and structuring code. It is a specific style to implement certain principles.

There are other paradigms such as procedural, functional and logic. OOP is extremely common in many different languages.

# What is an Object?
'Self-contained' piece of code that is collection of methods and properties. 
Objects are used as building blocks and can interact with one another.

There are many ways to create objects in JS. We have object literals, constructor functions, classes, factories and more.

## Examples of Common Objects
|  |  |
| :--- | :--- |
| User | Cart |
| Post | Customer |
| Comment | Employee |
| UI Component | Message |
| Product | Book |
| Order | Item |

# Why Use OOP
- Can make your code easier to read and understand
- Prevents spaghetti code
- Flexible and allows you to build complex applications
- NOT always needed. OOP can be overkill for smaller projects. It's great for more complex projects, especially if working on a team.

# Components of OOP
- **Constructor Functions (JS)**: Creates a blueprint for an object
- **Prototypes (JS)**: A way for objects to inherit properties and methods from one another
- **Classes**: Another way to create a blueprint. "Synthatic Sugar" in JS, but part of many other languages
- **Instances**: Objects are "instantiated" using the blueprint (Constructor or Class)

# 4 Principles Of OOP
## 1. Abstraction
Hiding all but the relevant parts of an object in order to reduce complexity and increase efficiency.

## 2. Encapsulation
The process of wrapping up data and methods into a unit such as a class or a function. Encapsulation usually includes some kinds of "data hiding"

## 3. Inheritance
The process of inheriting the properties and methods from a parent class or constructor

## 4. Polymorphism
The process of inheriting the properties and methods from a parent class or constructor. Examples is using the same methods but they execute something differen per child class.



