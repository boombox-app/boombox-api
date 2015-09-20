var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../_build'));

app.use('/', require('./routes'));

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
