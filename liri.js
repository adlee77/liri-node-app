var keys = require("./keys.js");
var moment = require('moment');
moment().format();
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var input = process.argv[2];
var searchTerm = process.argv.slice(3).join(' ')
var fs = require('fs')

if (!searchTerm){
    searchTerm = "The Sign"
}

function spotifySearch() {
    spotify.search({ type: 'track', query: searchTerm }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        for (i = 0; i < response.tracks.items.length; i++) {
            console.log("Artist(s): " + response.tracks.items[i].album.artists[0].name);
            console.log("Song Title: " + response.tracks.items[i].name);
            console.log("Song Preview Link: " + response.tracks.items[i].album.external_urls.spotify)
            console.log("Album: " + response.tracks.items[i].album.name)
        }
    });
}
function concertSearch() {
    axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // console.log(response.data)
            for (i = 0; i < response.data.length; i++) {
                console.log("Name of Venue: " + response.data[i].venue.name)
                console.log("Venue Location: " + response.data[i].venue.location)
                console.log("Date of Event " + moment(response.data[i].datetime).format("MMM Do YYYY"))
            }
        })
}
function movieSearch() {
    axios.get("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log(response.data.Title);
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



