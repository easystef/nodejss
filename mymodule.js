 module.exports = function (dir, ext, callback) {

    var fs = require("fs")
    
    ext = '.' + ext;
    
    fs.readdir(dir, function(err, files) {
        
        if (err) {
            return callback(err);
        }
        
        for (var i = files.length - 1; i > -1; i--) {
            if (checkExtension(files[i], ext) != true) {
                files.splice(i, 1);
            }
        }
        
        callback(null, files);
        
    });
    
 }    
    
function checkExtension(file, ext) {
    var l = ext.length;
    return file.substring(file.length - l, file.length) == ext;
}