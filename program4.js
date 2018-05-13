var fs = require("fs")

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
    
    if (err) {
        return console.log(err);
    }
    
    for (var i = files.length - 1; i > -1; i--) {
        if (checkExtension(files[i], ext) != true) {
            files.splice(i, 1);
        }
    }

    for (var j = 0; j < files.length; j++) {
        console.log(files[j]);
    }
    
});

function checkExtension(file, ext) {
    var l = ext.length;
    return file.substring(file.length - l, file.length) == ext;
}