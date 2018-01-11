var Twit = require('twit');
var argv = require('yargs').argv;
var config = require('./config')

var Twit = new Twit(config);

if(argv.action === "post"){
  var tweet = { status: argv.params };
  console.log(`posting "${tweet.status}"...`);
  function tweeted(err, data, response) {
    if(err){
      console.log("Something went wrong!");
    }
    else{
      console.log(`You have successfully posted the following tweet ${argv.params}!`);
    }
  }

  Twit.post('statuses/update', tweet, tweeted)
}
else if (argv.action === "get") {
  var params = {screen_name: argv.params}
  console.log(`loading tweets from ${argv.params} now...`)
  function searchedData(err, data, response) {
    data.map(tweet => {
      console.log(tweet.text);
    })
  }
  Twit.get('statuses/user_timeline', params, searchedData);
}
else {
  console.log("wrong action used, enter either 'get' to retrieve a user's Tweets or 'post' to post a new Tweet");
}
