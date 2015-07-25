// app/routes.js
var path    = require('path');
var models  = require('./models/index.js')

module.exports = function(app) {
  app.post('/wolf', models.wolf);
  app.post('/origin', models.originCode);
  app.post('/destination', models.destinationCode);
  app.post('/fare', models.fare)
  app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname + '../../public')});
  });
};
