var net = require('net');

var portNum = process.argv[2];

var server = net.createServer(function(socket) {
    
    var d = new Date();
    d = formatDate(d);
    socket.write(d + '\r\n');
    
    socket.end();
    
});

server.on('error', function(err) {
  throw err;
});

server.listen(portNum);

function formatDate(d) {
    // YYYY-MM-DD hh:mm
    
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    var H = d.getHours();
    var m = d.getMinutes();
    
    var outputDate = Y + '-';
                
    if (M < 10) {outputDate += 0;}
    outputDate += M + '-';
    
    if (D < 10) {outputDate += 0;}
    outputDate += D + ' ';
    
    if (H < 10) {outputDate += 0;}
    outputDate += H + ':';
    
    if (m < 10) {outputDate += 0;}
    outputDate += m;
    
    return outputDate;
}