// server.js

// modules ================================================
var express					= require('express');
var app							= express();
var bodyParser 			= require('body-parser');
var methodOverride 	= require('method-override');

// configuration ==========================================

// set our port
var port = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

// routes =================================================
require('./app/routes.js')(app);

// set the static files location /public
app.use(express.static(__dirname + '/public'));

// start app ==============================================
// start our app at http://localhost:8080
app.listen(port);

// directions to the user
console.log('navigate browser to ' + port);

exports = module.exports = app;
