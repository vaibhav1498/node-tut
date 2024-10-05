const path = require('path');

const seperator = path.sep;
console.log(seperator);

const wholePath = path.join('folder','test.txt');
console.log(wholePath);

const absolute = path.resolve('folder','test.txt');
console.log(absolute);

const basename = path.basename(absolute);
console.log(basename);