const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename() - the actual file name in the path 
const base1 = path.basename(myFilePath);          // with extension
const base2 = path.basename(myFilePath, '.js');   // without extension


console.log(base1);
console.log(base2);

// extname() - gets the extension of the filepath
const ext = path.extname(myFilePath);
console.log(ext);

// dirname() - gets the directory of a path
const dir = path.dirname(myFilePath);
console.log(dir);

// join() - creates relative file paths but adds the correct seperator etc, recommended to use
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log(myPath);

// resolve() - creates the absolute filepath
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath2);

// __dirname - gives you the current directory to the node core modules folder
//           - that's where this file code is running from 
console.log(__dirname);

// __filename - the path to the filename of the file that is running this code
console.log(__filename);





