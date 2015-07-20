// app/routes.js
var path    = require('path');
var models  = require('./models/index.js')

module.exports = function(app) {
  //app.get('/test', models.test);
  app.post('/test', models.test);
  app.get('*', function(req, res) {
    res.sendFile('home_old.html', {root: path.join(__dirname + '../../public/views')});
  });
};
