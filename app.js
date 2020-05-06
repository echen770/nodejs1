const os = require('os');

var totMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total memory: ${totMem}`);
console.log(`Free memory: ${freeMem}`);