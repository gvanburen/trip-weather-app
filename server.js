// server.js

// modules ================================================
var express					= require('express');
var app							= express();
var bodyParser 			= require('body-parser');
var methodOverride 	= require('method-override');
var port 						= process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.listen(port);
console.log('navigate browser to ' + port);

// routes =================================================
var routes = require('./app/routes.js');
routes(app);

exports = module.exports = app;
