

function router(handle, pathname, response) {
    console.log("A punto de rutear un petición para: " + pathname);
    var path = require("path");
    var extension = path.extname(pathname);
    var contentType = "text/html";
    var rootDir = (extension === ".png") ? "../images" : "../www";

    /* favicon ico */
    if(pathname === "/favicon.ico") {
        var fs = require("fs");
        response.setHeader("Content-Type", "image/x-icon");
        fs.createReadStream("../www/favicon.ico").pipe(response);
        return;
    }

    /* asignamos el coontentType */
    switch(extension) {
        case ".css" : contentType = "text/css"; break;
        case ".js" : contentType = "text/javascript"; break;
        case ".png" : contentType = "image/png"; break;
    }

    /* creamos el objeto config para el manejador de extensiones */
    var config = {
        "response" : response,
        "path" : rootDir + pathname,
        "contentType" : contentType
    };

    if(typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else if(extension === ".html" || extension === ".css" || extension === ".js" || extension === ".png")  {
        return handle[extension](config);
    }else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No Encontrado");
        response.end();
    }
}
module.exports = router;