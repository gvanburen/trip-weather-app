// app/routes.js
var path            = require('path');
var models          = require('./models/index.js')
var bodyParser 			= require('body-parser');

module.exports = function(app) {
  app.post('/wolf', models.wolf);
  app.post('/origin', models.origin);
  app.post('/destination', models.destination);
  app.post('/fare', bodyParser.json(), models.fare);

  app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname + '../../public')});
  });
};
