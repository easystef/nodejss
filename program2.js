var fs = require('fs');
var fileText = fs.readFileSync(process.argv[2]).toString();
var x = fileText.split('\n').length - 1;

console.log(x);
