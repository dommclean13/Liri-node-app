// pulling in spotify keys so that outside sources don't have access to my personal key
require("dotenv").config();

// pulling in api keys and linking other files to access the npms
let keys = require("./keys.js");
let fs = require(fs);
let axios = require("axios");
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);

// gets user input
let userArg = process.argv[2]; 
let inputParam = process.argv[3];


// UserInputs(userArg, inputParam);


//function that will execute our requests
function UserInputs (userArg, inputParam){
    switch (userArg) {
    case 'concert-this':
        pullConcerts(inputParam);
        break;
    case 'spotify-this-song':
        pullSongs(inputParam);
        break;
    case 'movie-this':
        pullMovies(inputParam);
        break;
    case 'do-what-it-says':
        pullInfo();
        break;
    default: 
        console.log("Invalid input. You must type: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}