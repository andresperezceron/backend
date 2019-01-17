

function router(handle, request, response) {
    var url = require("url");
    var path = require("path");
    var pathname = url.parse(request.url).pathname;
    var extension = path.extname(pathname);
    var rootDir = "../www";
    var contentType = "text/html";
    console.log("A punto de rutear un petición para: " + pathname);

    /* asignamos el coontentType */
    switch(extension) {
        case ".css" : contentType = "text/css"; break;
        case ".js" : contentType = "text/javascript"; break;
        case ".png" : contentType = "image/png"; break;
        case ".ico" : contentType = "image/x-icon"; break;
    }

    /* creamos el objeto config para los manejadores */
    var config = {
        "response" : response,
        "request" : request,
        "path" : rootDir + pathname,
        "contentType" : contentType
    };

    if(typeof handle[pathname] === 'function') {
        return handle[pathname](config);
    } else if(extension === ".html" || extension === ".css" ||
              extension === ".js" || extension === ".png" || extension === ".ico")  {
        return handle[extension](config);
    }else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No Encontrado");
        response.end();
    }
}

module.exports = router;