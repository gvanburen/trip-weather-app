// app/routes.js
var path    = require('path');
var models  = require('./models/index.js')

module.exports = function(app) {
  app.post('/test', models.test);
  app.get('*', function(req, res) {
  	res.sendFile('./public/views/index.html');
  });
};
