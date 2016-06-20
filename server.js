var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');

// Authentication module.
var auth = require('http-auth');
var basic = auth.basic({
	realm: "Nope It's Private",
	file: __dirname + "/users.htpasswd"
});

// Application setup.
var app = express();
app.use(auth.connect(basic));
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');

// Create an HTTP service.
http.createServer(app).listen(8000);
