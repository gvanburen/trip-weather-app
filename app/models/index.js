var path        = require('path');
var http        = require('http');
var request     = require('request');
var dateFormat  = require('dateformat');
var wolfram     = require('wolfram').createClient("YVKY3W-A8PRJ277XJ")

exports.wolf = function(req, res) {
  var dest = req.body.destination;
  var toM = dateFormat(req.body.toDate, "mmmm");
  var toD = dateFormat(req.body.toDate, "dd");
  var frM = dateFormat(req.body.fromDate, "mmmm");
  var frD = dateFormat(req.body.fromDate, "dd")

  var q = 'average temperature in ' + dest + ' from ' + frM + ' ' + frD + ' to ' + toM + ' ' + toD;
  // average temperature in dest from month day to month day
  console.log(q);
  wolfram.query(q, function(err, result) {
    if(err) throw err
    res.json(result)
    //console.log("Result: %j", result);
  });
}

exports.origin = function(req, res){
  var origin = req.body.origin;
  console.log(origin);
  var options = {
    url: 'http://api.brfares.com/ac_loc?term=' + origin
  };
  request(options, function(error, response, body){
    res.send(body);
    console.log(body);
  });
}

exports.destination = function(req, res){
  var dest = req.body.destination;
  console.log(dest);
  var options = {
    url: 'http://api.brfares.com/ac_loc?term=' + dest
  };
  request(options, function(error, response, body){
    res.send(body);
    console.log(body);
  });
}

exports.fare = function(req, req){
  var origin = req;
  console.log(origin);
}
