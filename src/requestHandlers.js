

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
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Iniciar");
    response.end();
}

function subir(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Subir");
    response.end();
}

module.exports.iniciar = iniciar;
module.exports.subir = subir;
module.exports.staticFileByExtension = staticFileByExtension;