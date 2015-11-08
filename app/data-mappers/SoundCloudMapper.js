'use strict';

let debug = require('debug')('boombox:mapper:soundcloud');

const SERVICE_ID = 1;

function toModel (raw) {
  return {
    trackId: raw.id,
    serviceId: SERVICE_ID,
    title: raw.title,
    artist: raw.user.username,
    duration: raw.duration,
    thumbnail: raw.artwork_url || raw.waveform_url,
    streamUrl: raw.stream_url
  };
}

module.exports = {
  toModel : toModel
}
