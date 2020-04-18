var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var input = process.argv[2];
var searchTerm = process.argv.slice(3).join(' ')
console.log(searchTerm)
var fs = require('fs')

function spotifySearch() {
    spotify.search({ type: 'track', query: searchTerm }, function(err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(response.tracks.items); 
      });
}
function concertSearch() {
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
    .then(function(response){
        console.log(response.data)
    })
}
function movieSearch() {
    axios.get("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log(response.data)
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}

function readRandom(){
    fs.readFile("./random.txt", "utf8", function(err, data){
        console.log(data.split(","))
        var fileDataArray = data.split(",")
        input = fileDataArray[0]
        searchTerm = fileDataArray[1]
        menu()
    })
}


function menu() {
switch (input) {
    case "concert-this":
        concertSearch()
        break;
    case "spotify-this-song":
        spotifySearch()
        // process.argv[3] = song-search
        break;
    case "movie-this":
        movieSearch()
        break;
    case "do-what-it-says":
        readRandom()
        break;
};
}
menu();


 
