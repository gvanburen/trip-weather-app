// nodeRoute.js

// BASE SETUP
// ========================================
var express = require('express');
var app 	= express();
var path 	= require('path');
var port	= process.env.PORT || 8080;

// ROUTES
// ========================================






// START THE SERVER
// ========================================
app.listen(port);
console.log('Listening on port ' + port);







// sample route witha a route 
// app.get('/', function(req, res){
// 	res.sendFile('test.html', { root: path.join(__dirname, '../../')});
// });

// app.get('/home', function(req, res){
// 	res.sendFile('test.html', { root: path.join(__dirname, '../../')});
// });

// var server = app.listen(3000, function(){
// 	var host = server.address().address;
// 	var port = server.address().port;

// 	console.log('Example app listening at http://%s:%s', host, port);
// })