
var http = require("http");
var url = require("url");

function server(route, handle) {
    function onRequest(request, response) {
        console.log("Petición recibiba.");
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(6969);
    console.log("Servidor INICIADO¡");
}

module.exports = server;
