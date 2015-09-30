var debug = require('debug')('boombox:mapper:soundcloud');
var Model = require('./../models/musicModel');
const SERVICE_ID = 1;

function toModel (raw) {
  return {
    trackId: raw.id,
    serviceId: SERVICE_ID,
    title: raw.title,
    artist: raw.user.username,
    duration: (raw.duration / 1000),
    thumbnail: raw.artwork_url,
    streamUrl: raw.stream_url
  };
}

module.exports = {
  toModel : toModel
}
