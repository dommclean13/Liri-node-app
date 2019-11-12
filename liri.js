require("dotenv").config();
// pulling in api keys
let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);
 

let getMySong = function() {
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

};