var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var input = process.argv[2];
var searchTerm = process.argv.slice(3).join(' ')
console.log(searchTerm)

var fs = require('fs')

function spotifySearch() {
    spotify.search({ type: 'track', query: searchTerm }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        for (i = 0; i < response.tracks.items.length; i++) {
            console.log(response.tracks.items);
        }
    });
}
function concertSearch() {
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // console.log(response.data)
            for (i = 0; i < response.data.length; i++) {
                console.log(response.data)
            }
        })
}
function movieSearch() {
    axios.get("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("Release Date: " + response.data.Released);
            console.log("The movie's IMDB rating is: " + response.data.imdbRating);
            console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value)
            console.log("Release Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
}

function readRandom() {
    fs.readFile("./random.txt", "utf8", function (err, data) {
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



