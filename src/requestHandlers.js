
function staticFileByExtension(config) {
    var fs = require("fs");
    fs.readFile(config.path, function(bError, content) {
        if(bError) {
            config.response.writeHead(500);
            config.response.end();
        }
        else {
            config.response.writeHead(200,{"Content-Type" : config.contentType});
            config.response.end(content);
        }
    });
}

function faviconIcon(config) {
    var fs = require("fs");
    fs.stat(config.path, (err, stats) => {
        if(!err) {
            if(stats.isFile()) {
                config.response.setHeader("Content-Type", config.contentType);
                fs.createReadStream(config.path).pipe(config.response);
            }
        }
    });
}

function getDirs(config) {
    var fs = require("fs");
    var rootDir = "../www/";
    var dirs = [];
    fs.readdir(rootDir, function(err, files) {
        for(var i = 0; i < files.length; i++) {
            fs.stat(rootDir + files[i], function(err, stat) {
                if(stat.isDirectory() && files[this.i] !== "images" && files[this.i] !== "upload") {
                    dirs.push(files[this.i]);
                }
                if(files.length === (this.i + 1)) {
                    config.response.writeHead(200,{"Content-Type" : config.contentType});
                    config.response.end(JSON.stringify({"dirs" : dirs}));
                }
            }.bind({i : i}));
        }
    });
}

function iniciar(config) {
    var fs = require("fs");
    fs.readFile("../www/index.html", function(bError, content) {
        if(bError) {
            config.response.writeHead(500);
            config.response.end();
        }
        else {
            config.response.writeHead(200,{"Content-Type" : config.contentType});
            config.response.end(content);
        }
    });
}

function subir(config) {
    const formidable = require('formidable');
    const entrada = new formidable.IncomingForm();
    entrada.uploadDir = "upload";
    entrada.parse(config.request);
    entrada.on("fileBegin", function(fiel, file) {
        file.path = "../www/upload/" + file.name;
    });
    entrada.on("end", function() {
        config.response.writeHead(200, {"Content-Type": config.contentType});
        config.response.write("Hola Subir");
        config.response.end();
    });
}

module.exports.iniciar = iniciar;
module.exports.subir = subir;
module.exports.getDirs = getDirs;
module.exports.staticFileByExtension = staticFileByExtension;
module.exports.faviconIcon = faviconIcon;