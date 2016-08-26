// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18;

// 2. Bracket notation:
twitter['ceo'] = 'Jack Dorsey'

// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";
twitter.address = twittersAddress;
// I used dot notation to add this property and its' respective value to the object.

// 4. Array:
var tweetsArr = ["This is my first tweet!", "This is my second tweet!", "This is my last tweet of the night!"];
twitter.tweets = tweetsArr;

// 5. Loop through array:
for(var i = 0; i < twitter.tweets.length; i++){
	console.log(twitter.tweets[i]);
};

// 5. Invoke countCharacters:
twitter.countCharacters(twitter.tweets[1]);
// twitter.countCharacters takes a string as a parameter and returns the value of its length. We expect this case to return 24.

// 6. Loop through twitter object:
for(var key in twitter){
	console.log(key);
};

// Just to check:
/* for(var key in twitter){
	console.log(twitter[key]);
}; */


