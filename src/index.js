//Core Module
//imports
var http = require('http'); //This module allows me to run javascript on the server side
var url = require("url");
var { info, error } = require("./modules/my-log");
var querystring = require("querystring");
// var log = require("./modules/my-log"); //i use a dot when i am in the same folder
var consts = require("./utils/consts");
var firebase = require("../libs/firebase");
var { countries } = require('countries-list'); //i import it  from the  package countries-list

var server = http.createServer(function(request, response) {
    var parsed = url.parse(request.url);
    console.log("parsed", parsed);

    var pathname = parsed.pathname;

    var query = querystring.parse(parsed.query);
    console.log("query", query);

    // response.writeHead(200, { "Content-Type": "application/json" }); //response
    // response.write(JSON.stringify(countries.CO));
    // response.end();

    var pathname = parsed.pathname;

    if (pathname === '/') {
        response.writeHead(200, { "Content-Type": "text/html" }); //status code 200 correct allows me to html
        response.write("<html><body><p>Home Page</p></body></html>"); //I've defined like a string the basic html structure
        response.end(); //I send the respose to the client
    } else if (pathname === "/exit") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html><body><p>Bye</p></body></html>");
        response.end();
    } else if (pathname === "/info") {
        var result = info(pathname);
        // var result = log.info(pathname);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(result);
        response.end();
    } else if (pathname === "/country") {
        response.writeHead(200, { "Content-Type": "application/json" }); //response
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    } else if (pathname === "/error") {
        var result = log.error(pathname);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(result);
        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<html><body><p>Not Found</p></body></html>");
        response.end();
    }

}); //i create a server with a anonim function with two parameters a request and a response

server.listen(4000); //It's going to run in 4000 port
console.log("running on 4000"); //message