
var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {
    "/" : requestHandlers.iniciar,
    "/iniciar" : requestHandlers.iniciar,
    "/subir" : requestHandlers.subir,
    ".html" : requestHandlers.html,
    ".css" : requestHandlers.css
};
server(router, handle);