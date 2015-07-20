var path = require('path');

exports.test = function(req, res) {
  res.send('did you just submit this?');//File('test.html', {root: path.join(__dirname, '../../public/views')});
}
