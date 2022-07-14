// GLOBAL - no windows

// __dirname - path to current directory
// __filename - file name
// require - function to use modules(Comman JS)
// process - info about env where the program is being executed.

// console.log( __dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);