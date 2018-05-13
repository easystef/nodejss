var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var outputString1 = '';
var outputString2 = '';
var outputString3 = '';

http.get(url1, function(res) {
    
    res.on('data', function(data) {
        outputString1 += data.toString();
    });
    
    res.on('end', function() {
        console.log(outputString1);
        
        http.get(url2, function(res) {
    
            res.on('data', function(data) {
                outputString2 += data.toString();
            });
    
            res.on('end', function() {
                console.log(outputString2);
                
                http.get(url3, function(res) {
        
                    res.on('data', function(data) {
                    outputString3 += data.toString();
                });
                
                    res.on('end', function() {
                    console.log(outputString3);
                });
        
                });
                
            });
    
        });
        
    });
    
});