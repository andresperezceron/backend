
var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {
    "/" : requestHandlers.iniciar,
    "/iniciar" : requestHandlers.iniciar,
    "/subir" : requestHandlers.subir,
    "/getDirs" : requestHandlers.getDirs,
    ".png" : requestHandlers.staticFileByExtension,
    ".html" : requestHandlers.staticFileByExtension,
    ".css" : requestHandlers.staticFileByExtension,
    ".js" : requestHandlers.staticFileByExtension
};
server(router, handle);