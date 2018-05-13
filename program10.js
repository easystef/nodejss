var http = require('http')
var fs = require('fs');

var portNumber = process.argv[2];
var fileLoc = process.argv[3];

var server = http.createServer(function(req, res) {
    var src = fs.createReadStream(fileLoc);
    src.pipe(res);
});

server.listen(portNumber);
