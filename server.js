var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, '/')));
// Create an HTTP service.
http.createServer(app).listen(8000);
