var Twit = require('twit');
var argv = require('yargs').argv;
var config = require('./config')

var Twit = new Twit(config);
var user = argv.user;
var params = {screen_name: user}

console.log(`loading tweets from ${user} now...`)

function searchedData(err, data, response) {
  data.map(tweet => {
    console.log(tweet.text);
  })
}

Twit.get('statuses/user_timeline', params, searchedData);
