const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./folder/subfolder/test1.txt','utf-8');
const second = readFileSync('./folder/test.txt','utf-8');

console.log(first,second);
writeFileSync('./folder/result.txt',`Here the string ${first} ---- ${second}`,{flag:'a'})