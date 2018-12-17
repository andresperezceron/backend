

function router(handle, pathname, response) {
    console.log("A punto de rutear un petición para: " + pathname);
    var path = require("path");
    var extension = path.extname(pathname);

    if(typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else if(extension === ".html" || extension === ".css")  {
        return handle[extension](response, pathname);
    }else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No Encontrado");
        response.end();
    }
}
module.exports = router;