var router = require('express').Router(),
    Promise = require('bluebird'),
    SoundCloud = Promise.promisifyAll(require('./services/SoundcloudService')),
    PopularSongs = Promise.promisifyAll(require('./services/PopularSongsService'));

router.get('/', function (req, res, next) {
  res.sendfile('./_build/index.html');
});

router.get('/api', function (req, res, next) {
  res.json({message: 'API Working', status: 'success'});
});

router.get('/api/popular-songs', function (req, res, next) {
  //Get the most popular songs from DB
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

  /*
  * /api/search/tracks?query=powerless+linkin+park&serviceId=1 // Search SC
  * /api/search/tracks?query=powerless+linkin+park&serviceId=2 // Search YT
  * /api/search/tracks?query=powerless+linkin+park&serviceId=3 // Search SF
  */
});

router.get('/api/tracks/:id', function (req, res, next) {
  /*
  * /api/tracks/123456?serviceId=1
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

module.exports = router;

//SoundCloud
// https://api-v2.soundcloud.com/search/tracks?q=powerless%20linkin%20park&facet=genre&limit=10&offset=0&client_id={code}

// Stream
// https://api.soundcloud.com/tracks/196281077/stream?client_id={code}
