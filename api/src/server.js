var express = require('express'),
    app     = express();
var mongoose = require('mongoose');

app.get('/testurl', (req, res) => res.send('Hello World! test'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
    
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

var templateController = require.main.require('controllers/templateController');
templateController(app);


mongoose.connect('mongodb://aravind:limat@ds235768.mlab.com:35768/smsapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected");
});
