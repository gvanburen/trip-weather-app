var path = require('path');

exports.wolf = function(req, res) {
  var destination = req.body.destination;
  var toDate      = req.body.toDate;
  var fromDate    = req.body.fromDate;
  
  // wolfram alpha api $http.get request
  // retreiving data
  //


  res.send('did you just submit this?');//File('test.html', {root: path.join(__dirname, '../../public/views')});
}
