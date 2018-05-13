var http = require('http');

var url = process.argv[2];

var outputString = '';

http.get(url, function(res) {
    
    res.on('data', function(data) {
        outputString += data.toString();
    })
    
    res.on('end', function() {
        console.log(outputString.length);
        console.log(outputString);
    })
    
});