var SC = require('node-soundcloud');
var SoundCloudMapper = require('../data-mappers/SoundCloudMapper');

SC.init({
  id: '10b1e7bf6b21e1a2a2971196b918833a',
  secret: 'a24f20b1e7c03f68c52b0dd6f8ac1767',
  uri: 'localhost:3000'
});

function searchMusic(query, callback) {

  SC.get('/tracks?q=' + encodeURI(query) + '&limit=10&offset=0', function(err, tracks) {
    if (err) {
      return callback(err[0] ? err[0].error_message : err);
    }

    if (!tracks || !tracks.length){
      return callback({
        statusCode: 500,
        status_message : 'error',
        message : 'Not found!'
      });
    }

    return callback(null, tracks.map(SoundCloudMapper.toModel));
  });
}

function getMusic (id, callback) {

  SC.get('/tracks/' + id, function (err, track) {
    if (err) {
      return callback(err);
    }

    return callback(null, SoundCloudMapper.toModel(track));
  });
}

module.exports = {
  searchMusic : searchMusic,
  getMusic  : getMusic
};
