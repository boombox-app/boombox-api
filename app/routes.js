var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.sendfile('./_build/index.html');
});

router.get('/api', function (req, res, next) {
  res.json({message: 'API Working', status: 'success'});
});

router.get('/api/popular-songs', function (req, res, next) {
});

module.exports = router;
