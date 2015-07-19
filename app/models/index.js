var path = require('path');

exports.test = function(req, res) {
  console.log(req.body);
  res.sendFile('test.html', {root: path.join(__dirname, '../views')});
}
