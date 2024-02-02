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

# 3. Installing packages
``` JS Terminal
$npm init
```
creates a **package.json** file for configuration

To go with the default answers in the package.json file
``` JS Terminal
$npm init -y
```

To install a package globally
``` JS Terminal
$npm i -g axios
```

-D runs it only on development, gets added in package.json under devDependencies
``` JS Terminal
$npm i -D nodemon
```

Setups a script to run app.js (but could be anything)
``` JS package.json
"scripts": {
  "start": "node app.js"
}
```
Call the script
``` JS Terminal
$npm start
```

! if it's not 'start' then use 'npm run dev'
example:
``` JS package.json
"scripts": {
  "dev": "nodemon app.js"
}
```

``` JS Terminal
$npm run dev
```
- Use 'ctrl+c' to close nodemon server

# 4. ES-Modules
- Requires that you specify the type as module in the page head
``` HTML
<script src="app.js" type="module" defer></script>
```
- Modules aren't supported in older browsers (eg. Internet Explorer)


# 4. Module Bundlers
## What is a module Bundler
A Module bundler is a tool that takes all of your source code, which is usually multiple files and bundles them together, often times, into a single build file.

## Basic Setup of Webpack
Install webpack and webpack cli - as dev dependency
``` JS Terminal
$npm i -D webpack webpack-cli
```

## Style Loader and CSS loader install
``` JS Terminal
$npm i -D style-loader css-loader
```
- Loaders need configuration. This is done in **webpack.config.js**

These loaders require a config. This uses a regular expression
``` JS webpack.config.js
module: {
    rules: [
      {
        test: /\.css$/,                  
        use: ['style-loader', 'css-loader']
      }
    ]
  }
```
- The regular expression uses '\.css$'' to indicate any .css file needs to use the loader

## Install HTML webpack plugin
```JS Terminal
$npm i -D html-webpack-plugin
```
- Used for generating HTML files with webpack to the 'dist' folder

```JS webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
----
plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
```

``` HTML
<%= htmlWebpackPlugin.options.title %> 
```
- Allow to access webpack options in the html template file. This gets output to the dist.






