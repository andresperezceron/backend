

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

function getDirs(response) {
    var fs = require("fs");
    var rootDir = "../www/";
    var dirs = [];
    fs.readdir(rootDir, function(err, files) {
        for(var i = 0; i < files.length; i++) {
            fs.stat(rootDir + files[i], function(err, stat) {
                if(stat.isDirectory()) {
                    dirs.push(files[this.i]);
                }
                if(files.length === (this.i + 1)) {
                    response.writeHead(200,{"Content-Type" : "text/html"});
                    response.end(JSON.stringify({"dirs" : dirs}));
                }
            }.bind({i : i}));
        }
    });
}

function iniciar(response) {
    var fs = require("fs");
    fs.readFile("../www/index.html", function(bError, content) {
        if(bError) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200,{"Content-Type" : "text/html"});
            response.end(content);
        }
    });
}

function subir(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Subir");
    response.end();
}

module.exports.iniciar = iniciar;
module.exports.subir = subir;
module.exports.getDirs = getDirs;
module.exports.staticFileByExtension = staticFileByExtension;