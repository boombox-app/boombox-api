var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  console.log(req.url);
  next();
})
console.log(__dirname + '/../_build');

app.use(express.static(__dirname + '/../_build'));

app.get('/api', function (req, res) {
  res.json({message: 'API Working', status: 'success'});
});

app.get('/', function (req, res) {
  res.sendfile('./_build/index.html');
});

app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
