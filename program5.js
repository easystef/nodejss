var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, printOutput);

function printOutput(err, data) {
    
    if (err)
        return console.log(err);
    
    for (var j = 0; j < data.length; j++) {
        console.log(data[j]);
    }
}