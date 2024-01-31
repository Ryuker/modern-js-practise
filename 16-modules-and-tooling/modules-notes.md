# Modules Notes

# 1. Modules intro
  - there's 2 primary types of modules to learn, ESModules and CommonJS modules
  - module bundlers are used to support older browsers.
  - we're going to be using webpack as bundler this course.

# What Are Modules?
- Modules are just JavaScript Files that we can import into other JavaScript files.
- We can Export and import things like **variables**, **functions** and **classes**.
- We can also import 3rd-party packages from **NPM** (Node Package Manager)

# Why Use Modules & Tooling?
- Makes your code much more organized and easy to read/write by breaking it up into seperate files
- Reusability
- NPM packages
- Optimization
- Customized environment

# Types Of Modules
- Common JS Modules - Commonly used by Node.js
- ES Modules (ESM, ES6 Modules) - Commonly used in the front-end

* Modules are not supported in older browsers. There is support for ES Modules in newer browsers, but it is still recommended to use a module bundler.

# 2. What is Node.JS?
- Node is a JavaScript runtime environment. It allows JavaScript to run on the server, much like any other language such as Python, Ruby, Java, etc
- Node uses the V8 JS Engine, which is the same engine that Chrome uses
- The inner workings are similar to the browser, since it uses the v8 engine. 
- Obviously the is no 'Window' or 'Document' in Node

