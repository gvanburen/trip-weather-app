// nodeRoute.js

// BASE SETUP
// ========================================
var express = require('express');
var app 	= express();
var path 	= require('path');
var port	= process.env.PORT || 8080;

// ROUTES
// ========================================

// sample route to test functionality
app.get('/sample', function(req, res) {
	res.send('this is a sample!');
});

// CUSTOM ROUTES

// instance of router
var router = express.Router();

// route middleware
router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

// homepage
router.get('/', function(req, res) {
	res.send('im the homepage');
});

// about page
router.get('/about', function(req, res) {
	res.send('im the about page');
});

// route middleware to validate :name
router.param('name', function(req, res, next, name) {
	if (name.length === 4){
		console.log('its short');
	}

	console.log('doing name validations on ' + name);

	req.name = name;
	next();
});

// route with parameters
router.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
});

// NOT WORKING
// router.param('first', function(req, res, next, first, second, third) {
// 	console.log('checking ' + first);
// 	console.log('checking ' + second);
// 	console.log('checking ' + third);

// 	req.first = first;
// 	req.second = second;
// 	req.third = third;
// 	next();
// });

router.get('/hello/:first/:second/:third', function(req, res) {
	res.send('hello ' + req.params.first + ' ' + req.params.second + ' ' + req.params.third);
});

// apply the routes
app.use('/', router);

// START THE SERVER
// ========================================
app.listen(port);
console.log('Listening on port ' + port);
