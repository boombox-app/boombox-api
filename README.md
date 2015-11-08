# Boombox API

Build applications using the most popular streaming services of the internet.

###Technologies

- Node.js
- Express
- MongoDB
- Redis
- Socket.IO

##API Routes

endpoint | method | function | query params
--- | --- | --- | ---
`/` | `GET` | Redirect to `/api` | null
`/api` | `GET` | API Base URL | null
`/api/popular-songs` | `GET` | Get Popular songs | null
`/api/search/tracks` | `GET` | Search songs | `{query, serviceId}`
`/api/tracks/:id` | `GET` | Get specific song info | null
`/api/search/users` | `GET` | Search users | `{query}`
`/api/search/users/:id` | `GET` | Get specific user | null

##The ServiceId
To complete undestand what happening in the platform and which stream we'll use, we follow all services through the `serviceId` param.

**List of ServiceId's**

Implemented | Service | Service Code
--- | --- | ---
[x] | SoundCloud | `1`
[ ] | Youtube | `2`
[ ] | Spotify | `3`
[ ] | Deezer | `4`
[ ] | Rdio | `5`

##Using SoundCloud API

####Search songs
``` javascript
https://api-v2.soundcloud.com/search/tracks?q={query}&facet=genre&limit={limit}&offset={index}&client_id={code}
//Example
https://api-v2.soundcloud.com/search/tracks?q=powerless%20linkin%20park&facet=genre&limit=10&offset=0&client_id={code}
```

####Play a song
``` javascript
https://api.soundcloud.com/tracks/{track_id}/stream?client_id={code}
//Example
https://api.soundcloud.com/tracks/196281077/stream?client_id={code}
```

##Using Youtube API
