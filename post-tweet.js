var Twit = require('twit');
var argv = require('yargs').argv;
var config = require('./config')

var T = new Twit(config);
var tweet = { status: argv.tweet };

console.log(`posting "${tweet.status}"...`);

function tweeted(err, data, response) {
  if(err){
    console.log("Something went wrong!");
  }
  else{
    console.log(`You have successfully posted the following tweet ${tweet.status}!`);
  }
}

T.post('statuses/update', tweet, tweeted)
