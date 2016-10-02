function createTweetElement(text) {
    var item = document.createElement("li");
    var content = document.createTextNode(text);
    item.appendChild(content);
    return item;
}

function getStorageTweets() {
    return Immutable.List(JSON.parse(localStorage.getItem("tweets")));
}

function setStorageTweets(list) {
    localStorage.setItem("tweets", JSON.stringify(list));
}

function pushTweet(tweet) {
    var tweetList = getStorageTweets();
    setStorageTweets(tweetList.push(tweet));
}

function loadTweets() {
    var tweetsList = document.getElementById("tweets");
    tweetsList.innerHTML = "";

    var tweets = getStorageTweets().reverse();
    tweets.map(function (tweet) {
        return createTweetElement(tweet);
    }).forEach(function (item) {
        tweetsList.appendChild(item);
    });
}

function init() {
    loadTweets();

    var tweetForm = document.getElementById("tweet");

    tweetForm.addEventListener("keydown", function (e) {
        var textValue = tweetForm.value;
        if (e.keyCode === 13 && textValue !== "") {
            pushTweet(textValue);
            tweetForm.value = "";
            loadTweets();
        }
    });
}

init();

// 消す魔法
// localStorage.clear();

