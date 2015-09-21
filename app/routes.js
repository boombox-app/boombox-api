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

// Services
/*
* Search
* /api/search/tracks?query=powerless+linkin+park&serviceId=1 // Search SC
* /api/search/tracks?query=powerless+linkin+park&serviceId=2 // Search YT
* /api/search/tracks?query=powerless+linkin+park&serviceId=3 // Search SF
*/

//SoundCloud
// https://api-v2.soundcloud.com/search/tracks?q=powerless%20linkin%20park&facet=genre&limit=10&offset=0&client_id={code}

// Stream
// https://api.soundcloud.com/tracks/196281077/stream?client_id={code}

// SoundCloud Return
// {
//   "firstComment": null,
//   "id": 196281077,
//   "track": {
//     "artist": "dj nhald",
//     "duration": 343,
//     "id": 196281077,
//     "permalink": "https://soundcloud.com/dj-nhald/mabel-bumbumbombtechdj-nhald-edit-remix",
//     "serviceId": 1,
//     "soundCloudKey": 196281077,
//     "thumbnail": "https://i1.sndcdn.com/artworks-000110301077-ipfv8x-crop.jpg",
//     "title": "Mabel - Bumbum(bombtech)dj Nhald Edit Remix"
//   }
// }

// Spotify Return
// {
//   "id": "4zNk347FJz4yDDcjUhJJMI",
//   "track": {
//     "id": "4zNk347FJz4yDDcjUhJJMI",
//     "title": "POWERLESS",
//     "artist": "Linkin Park",
//     "serviceId": 5,
//     "duration": 224,
//     "thumbnail": "https://i.scdn.co/image/c16123c8441b4a5cb423322d5a8727042af8e6fd",
//     "permalink": "https://open.spotify.com/track/4zNk347FJz4yDDcjUhJJMI",
//     "spotifyKey": "4zNk347FJz4yDDcjUhJJMI",
//     "spotifyPreview": "https://p.scdn.co/mp3-preview/8f6f9e147c8aecb20b9d94f6a7ec38b8c38e5492",
//     "onlySpotify": true
//   },
//   "firstComment": null
// }

// Model
// {
//   "id": "vwmp34z9",
//   "likeCount": 25,
//   "comments": [{
//     "createdAt": "2015-09-20T17:08:41.000Z",
//     "updatedAt": "2015-09-20T17:08:42.000Z",
//     "id": "cr6b6mxr",
//     "comment": "really I love it ",
//     "entities": {
//       "tags": [],
//       "links": [],
//       "mentions": []
//     },
//     "volleyId": "vwmp34z9",
//     "personId": "pw53xpzw"
//   }],
//   "commentCount": 1,
//   "followingLiked": ["pnr797dw", "pnqypkzn", "pnyx845w", "pwpkymrn", "pndr4bbn", "pwkr7ypn", "pn3qybmn", "pn3qy9mn", "pn4ryayn", "pwgmgqxw"],
//   "createdAt": "2015-09-20T10:01:43.000Z",
//   "updatedAt": "2015-09-21T11:19:51.000Z",
//   "personId": "pkn48myn",
//   "jamId": null,
//   "isLiked": 0,
//   "track": {
//     "id": "t95ybwd9",
//     "title": "Quiet. at dawn",
//     "artist": "Air Shaper",
//     "artistTwitter": null,
//     "serviceId": 1,
//     "duration": 164,
//     "thumbnail": "https://i1.sndcdn.com/artworks-000128018244-iw6ln1-crop.jpg",
//     "backgroundColour": "e6e6e6",
//     "permalink": "https://soundcloud.com/airshaper/quiet-at-dawn",
//     "echoNestKey": null,
//     "spotifyKey": null,
//     "soundCloudKey": "221642712",
//     "secretSoundCloud": null,
//     "soundCloudSecret": null,
//     "sevenDigitalKey": null,
//     "youTubeKey": "COKvt6HoeA4",
//     "beatsKey": null,
//     "itunesPreview": null,
//     "createdAt": "2015-09-20T10:01:43.000Z",
//     "updatedAt": "2015-09-20T10:01:47.000Z",
//     "rdioKey": null
//   },
//   "firstComment": null,
//   "otherLikeCount": 15,
//   "formattedTime": {
//     "quick": "1d",
//     "full": "1 day ago",
//     "timestamp": 1442743303
//   }
// }
