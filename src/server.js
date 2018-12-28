
var http = require("http");

function server(route, handle) {
    function onRequest(request, response) {
        console.log("Petición recibiba.");
        route(handle, request, response);
    }
    http.createServer(onRequest).listen(6969);
    console.log("Servidor INICIADO¡");
}

module.exports = server;
