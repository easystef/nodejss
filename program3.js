var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if (err) throw err;
    
    var fileText = data.toString();
    var x = fileText.split('\n').length - 1;

    console.log(x);
    
});


