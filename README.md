# Twitter web service

This web service has been built using NodeJS and allows you to tweet to your tweeter account and retrieve all the tweets from a specific user.

To use the web service, clone this Repo, then on the command line navigate to the containing folder. You need NodeJS installed on your computer to run this web service. Check the official NodeJS documentation for more information and download: https://nodejs.org/en/download/

Then type on the command line:

__npm install__

This will install all the necessary dependencies.

### How to post a tweet
You can use the configuration already set up and post a tweet to the test account on twitter (@LaurentBouhnik).
Or you can modify the config.js file with your own credential. For this you will have to:

1. Create an app going to https://apps.twitter.com
2. Fill in your details: Name, Description, Website, and agree to the agreement
3. Click "Create your Twitter application"
4. Go to the keys and access token, find your keys there
5. Hit create my access token and generate the access token.

Now you have to enter the keys and access token in the config.js file, replacing the default account details.

Once this is done, on the command line type:

__node post-tweet.js --tweet="_The tweet you want to post_"__

_Don't forget to write your tweet with quotation marks!_
### How to retrieve tweets
To retrieve all the tweets of the specific user, on the command line type:

__$ node get-tweet.js --user=_Name___

___Name___ being the name that the user displays on their twitter account, e.g LaurentBouhnik
