var keys = require("keys.js");

require("dotenv").config();



var input = process.argv[2];

switch (input) {
    case "concert-this":
        result = ;
        break;
    case "spotify-this-song":
        process.argv[3] = song-search
        break;
    case "movie-this":
        result = ;
        break;
    case "do-what-it-says":
        result = ;
        break;
};

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: song-search }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});