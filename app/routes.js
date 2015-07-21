// app/routes.js
var path    = require('path');
var models  = require('./models/index.js')

module.exports = function(app) {
  //app.get('/test', models.test);
  app.post('/wolf', models.wolf);
  app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname + '../../public')});
  });
};
