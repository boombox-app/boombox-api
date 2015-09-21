var SC = require('node-soundcloud'),
    Promise = require("bluebird");

SC.init({
  id: '10b1e7bf6b21e1a2a2971196b918833a',
  secret: 'a24f20b1e7c03f68c52b0dd6f8ac1767',
  uri: 'localhost:3000'
});

function get(query) {

  SC.get('/search/?q=' + encodeURI(query), function(err, track) {
    if ( err ) {
      throw err;
      return;
    }

    return track;
  });
}

module.exports = {
  get : get
};