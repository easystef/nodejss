var http = require('http')
var url = require('url');

var portNumber = process.argv[2];

var server = http.createServer(function(req, res) {

    if(req.method !== 'GET') {
        return ('Please send a GET request!\r\n');
    }

    var urlOutput = url.parse(req.url, true);
    var timeOutput;
    console.log(urlOutput.path);
    if (urlOutput.path.indexOf('unix') > 0) {
        timeOutput = JSON.stringify(unixObj(urlOutput.path));
    } else {
        timeOutput = JSON.stringify(timeObj(urlOutput.path));
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(timeOutput);
    res.end();
});

server.listen(portNumber);

function timeObj(str) {
    var x = str.indexOf('iso=');
    var hh = parseInt(str.substring(x + 15, x + 17));
    var mm = parseInt(str.substring(x + 18, x + 20));
    var ss = parseInt(str.substring(x + 21, x + 23));
    
    return {hour: hh, minute: mm, second: ss};
}

function unixObj(str) {
    var x = str.indexOf('iso=');
    var d = Date.parse(str.substring(x + 4).toString());
    return {unixtime: d};
}