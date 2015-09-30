'use strict';
var assert = require('assert');
var SoundCloudMapper = require('./../../../app/data-mappers/SoundCloudMapper');

var json = {"collection":[{"user":{"full_name":"","country":"United States","city":"Los Angeles","track_count":10,"followers_count":4818536,"followings_count":3,"public_favorites_count":2,"groups_count":0,"description":"The official Linkin Park soundcloud.\nTour dates at http://LinkinPark.com. ","plan":"Pro Unlimited","verified":false,"id":1818488,"uri":"https://api.soundcloud.com/users/1818488","username":"LINKIN_PARK","kind":"user","permalink":"linkin_park","permalink_url":"http://soundcloud.com/linkin_park","first_name":"","last_name":"","avatar_url":"https://i1.sndcdn.com/avatars-000142079606-avzu5z-large.jpg","last_modified":"2015/04/21 17:41:21 +0000"},"user_id":1818488,"genre":"Alternative","tag_list":"Linkin Park Burn It Down \"Linkin Park\" \"Burn it Down\" \"Living Things\" New Song Active Alternative Radio LP2012 Shinoda Mike Hybrid Theory LPStagelight","duration":231480,"downloadable":false,"streamable":true,"original_content_size":61208034,"commentable":true,"sharing":"public","public":true,"created_at":"2012/04/15 18:22:38 +0000","updated_at":"2015/09/30 01:24:34 +0000","isrc":"","state":"finished","embeddable":true,"embeddable_by":"all","license":"all-rights-reserved","waveform_url":"https://w1.sndcdn.com/wXY3hx8sPfth_m.png","feedable":false,"label_name":"Warner Bros. Records","release_date":"2012-04-16","has_downloads_left":true,"purchase_title":null,"purchase_url":"http://smarturl.it/sociallp","policy":"ALLOW","monetization_model":"NOT_APPLICABLE","visuals":null,"permalink":"burn-it-down","title":"Linkin Park - BURN IT DOWN","description":"The first single from the upcoming album, LIVING THINGS, out 06.26.12. Get an instant download when you pre-order the album at http://livingthings.linkinpark.com. Also available at iTunes- http://smarturl.it/lpsingle. ","track_type":"recording","last_modified":"2015/09/30 01:24:34 +0000","artwork_url":"https://i1.sndcdn.com/artworks-000021699433-neqkj3-large.jpg","id":43227597,"kind":"track","uri":"https://api.soundcloud.com/tracks/43227597","download_url":null,"stream_url":"https://api.soundcloud.com/tracks/43227597/stream","secret_token":null,"permalink_url":"https://soundcloud.com/linkin_park/burn-it-down","likes_count":133667,"download_count":1,"reposts_count":25495,"comment_count":6406,"playback_count":14146559}],"facets":null,"total_results":16258,"qid":"","query_urn":"soundcloud:search:7cbfd608dcbc444b9e235e29a5571118","next_href":"https://api-v2.soundcloud.com/search/tracks?limit=1&q=powerless%20linkin%20park&offset=1&query_urn=soundcloud%3Asearch%3A7cbfd608dcbc444b9e235e29a5571118"}

var MusicModel = {
  trackId: 43227597,
  serviceId: 1,
  title: "Linkin Park - BURN IT DOWN",
  artist: "LINKIN_PARK",
  duration: 231.48,
  thumbnail: "https://i1.sndcdn.com/artworks-000021699433-neqkj3-large.jpg"
};

describe('SoundCloudMapper', function () {
  it('#toModel', function() {
    let model = SoundCloudMapper.toModel(json.collection[0]);
    assert.deepEqual(model, MusicModel);
  });
})
