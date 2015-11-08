"use strict";

let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

let port = process.env.PORT || 3000;

app.use(cors());

app.use('/', require('./routes'));

app.listen(port);

console.log('Magic happens on port ' + port);

module.exports = app;
