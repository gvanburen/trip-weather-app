var path        = require('path');
var http        = require('http');
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

  // var options = {
  //   host: 'http://api.wolframalpha.com/',
  //   path: 'v2/query?input=average+temperature+in+' + dest + '+from+' + fromDateMonth + '+' + fromDateDay + '+to+' + toDateMonth + '+' + toDateDay + '&appid='
  // }
  //res.send('did you just submit this?');//File('test.html', {root: path.join(__dirname, '../../public/views')});
}
