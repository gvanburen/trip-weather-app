// server.js

// modules ================================================
var express			= require('express');
var app					= express();
var path 				= require('path');
var bodyParser 	= require('body-parser');

// configuration ==========================================

// set our port
var port = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public
app.use(express.static(__dirname + '/public'));

// routes =================================================
require('./app/routes.js')(app);

// start app ==============================================
// start our app at http://localhost:8008
app.listen(port);

// directions to the user
console.log('navigate browser to ' + port);
