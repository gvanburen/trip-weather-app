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
app.use(bodyParser.json({ type: 'application/vnd.ap+json' }));
app.use(methodOverride());

// routes =================================================
require('./app/routes.js')(app);

// set the static files location /public
// app.use('/libs', express.static(__dirname + '/public/libs'));
// app.use('/js', express.static(__dirname + '/public/js'));
// app.use('/css', express.static(__dirname + '/public/css'));
// app.use('/views', express.static(__dirname + '/public/views'));

app.listen(port);
console.log('navigate browser to ' + port);

exports = module.exports = app;
