function createItem(text) {
    var item = document.createElement("li");
    var content = document.createTextNode(text);
    item.appendChild(content);
    return item;
}

function getStorageTweets() {
    return Immutable.List(JSON.parse(localStorage.getItem("tweets")));
}

function setStorageTweet(list) {
    localStorage.setItem("tweets", JSON.stringify(list));
}

function pushTweet(tweet) {
    var tweetList = getStorageTweets();
    setStorageTweet(tweetList.push(tweet));
}

function loadTweet() {
    var tweetsList = document.getElementById("tweets");
    tweetsList.innerHTML = "";

    var tweets = getStorageTweets().reverse();
    tweets.map(function (tweet) {
        return createItem(tweet);
    }).forEach(function (item) {
        tweetsList.appendChild(item);
    });
}

function init() {
    loadTweet();

    var tweetForm = document.getElementById("tweet");

    tweetForm.addEventListener("keydown", function (e) {
        var textValue = tweetForm.value;
        if (e.keyCode === 13 && textValue !== "") {
            pushTweet(textValue);
            tweetForm.value = "";
            loadTweet();
        }
    });
}

init();

// 消す魔法
// localStorage.clear();

