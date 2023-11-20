//this file will create a node js server

//initialise http 
var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("hello jay!");
    response.end();
}).listen(8080);
