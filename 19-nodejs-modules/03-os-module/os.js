const os = require('os');

// arch() - returns cpu architecture
console.log(os.arch());       // return the os architecture

// platform()
console.log(os.platform());   // returns what kind of platform (on Mac this is 'darwin')

if (os.platform() === 'darwin') {
  console.log('you are on a mac');
} else if (os.platform() === 'win32') {
  console.log('you are on windows');
} else  {
  console.log('You are on Linux');
}

// cpus()
console.log(os.cpus());   // returns an array with a object per core of the cpus

// freemem()
console.log(os.freemem()); // return the number of bytes that are free on this machine
console.log(`Free memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(os.totalmem()); // return the number of total bytes that are on this machine
console.log(`Total memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir
console.log(os.homedir()); // return the home directory

// uptime - The time the OS has been on
console.log(os.uptime());
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);   // get the days
const hours = Math.floor(uptime / 60 / 60) % 24;  // the hours
const minutes = Math.floor(uptime / 60) % 60;     // the hours
const seconds = Math.floor(uptime) % 60;          // the seconds

console.log(`Uptime: ${uptime} Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`);

// hostname() - returns the operating system as a string
console.log(os.hostname());



