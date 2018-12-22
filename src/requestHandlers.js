

function staticFileByExtension(response, pathname, contentType) {
    var fs = require("fs");
    fs.readFile("../www" + pathname, function(bError, content) {
        if(bError) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200,{"Content-Type" : contentType});
            response.end(content);
        }
    });
}

function iniciar(response) {
   /* var fs = require("fs");
    fs.readFile("../www/index.html", function(bError, content) {
        if(bError) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200,{"Content-Type" : "text/html"});
            response.end(content);
        }
    });*/

    var fs = require("fs");
    var rootDir = "../www/";
    var dirs = [];

    function getDirs(callback) {
        fs.readdir(rootDir, function(err, files) {
            for(var i = 0; i < files.length; ++i) {
                var file = files[i];
                var filePath = rootDir + file;
                fs.stat(filePath, function(err, stat) {
                    if(stat.isDirectory()) {
                        dirs.push(this.file);
                    }
                    if(files.length === (this.i + 1)) {
                        callback(dirs);
                    }
                }.bind({file : file, i: i}));
            }
        });
    }
    getDirs(function (directories) {
        fs.readFile("../www/html5css3/index.html", function(bError, content) {
            if(bError) {
                response.writeHead(500);
                response.end();
            }
            else {
                response.writeHead(200,{"Content-Type" : "text/html"});
                response.end(content);
            }
        });
        //response.writeHead(200, {"Content-Type": "text/html"});
        //response.end(directories.toString());
    });

}

function subir(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Subir");
    response.end();
}

module.exports.iniciar = iniciar;
module.exports.subir = subir;
module.exports.staticFileByExtension = staticFileByExtension;