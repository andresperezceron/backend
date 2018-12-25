

function router(handle, pathname, response) {
    console.log("A punto de rutear un petición para: " + pathname);
    var path = require("path");
    var extension = path.extname(pathname);
    var contentType = "text/html";

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
    }

    if(typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else if(extension === ".html" || extension === ".css" || extension === ".js")  {
        return handle[extension](response, pathname, contentType);
    }else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No Encontrado");
        response.end();
    }
}
module.exports = router;