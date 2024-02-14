// fs (filesystem) Module
// const fs = require('fs');
const fs = require('fs/promises');

// Write to a file //

// Callback version 
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//   if(err) throw err;
//   console.log('File created');
// });

// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')
//   .then( () => console.log('File created'))
//   .catch((err) => console.log(err));

// Sync version
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File Created');

// Promise version using Async / Await
// async function createFile(filename, content) {
//   try {
//     await fs.writeFile(filename, content);
//     console.log('File Created');
//   } catch (error) {
//     console.log(error);
//   }
// };


// Read from a File //
async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch(err) {
    console.log(err);
  }
};

// Delete File //
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`${filename} deleted`);
  } catch(err) {
    console.log(err);
  }
}

// Rename a File //
async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} renamed to ${newName}`);
  } catch(err) {
    console.log(err);
  }
}

// Create a folder //
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch(err) {
    console.log(err);
  }
}

createFolder('folder1');


// createFile('file4.txt', 'Hello World 4');
// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');

// deleteFile('file4.txt');

// renameFile('file1.txt', 'file.txt');
