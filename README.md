This LIRI (Language Interpretation and Recognition Interface) app utilizes node.js to take in specific commands on the terminal/bash and output results.

### What Each Command Will Do

1. `node liri.js concert-this <artist/band name here>`

* This will search the Bands in Town Artist Events API for an artist and render the following information about each event   to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event
     
2. `node liri.js spotify-this-song '<song name here>'`

* This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
   
3. `node liri.js movie-this '<movie name here>'`

* This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

4. `node liri.js do-what-it-says`

* LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


*** If cloning this repo, user will need to get their own Spotify API key for full functionality.
