var router = require('express').Router(),
    Promise = require('bluebird'),
    SoundCloud = Promise.promisifyAll(require('./services/SoundcloudService')),
    PopularSongs = Promise.promisifyAll(require('./services/PopularSongsService'));

router.get('/', function (req, res, next) {
  res.redirect('/api');
});

router.get('/api', function (req, res, next) {
  res.json({message: 'API Working', status: 'success'});
});

router.get('/api/popular-songs', function (req, res, next) {
  PopularSongs.getPopularSongsAsync(null, null)
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      res.json(err).status(400);
    });
});

router.get('/api/search/tracks', function (req, res, next) {
  var query = req.query;

  if(!query.query || !query.serviceId) {
    return next({
      statusCode: 500,
      status_message : 'error',
      message: 'Invalid query!'
    });
  }

  SoundCloud.searchMusicAsync(query.query)
    .then(function (data) {
      res.json(data);
    }).catch(function(err){
      next(err);
    });
});

router.get('/api/tracks/:id', function (req, res, next) {
  /*
  * /api/tracks/123456
  */
  SoundCloud.getMusicAsync(req.params.id)
    .then(function (data) {
      res.json(data);
    }).catch(function (err) {
      next(err);
    });
});

router.get('/api/search/users', function (req, res, next) {
  /*
  * /api/search/users?query=rafaell+lycan
  */
});

router.get('/api/search/users/:id', function (req, res, next) {
  /*
  * /api/search/users/123456
  */
});

module.exports = router;
