function TweetUser(name,username,tweet,reply,like,date) {
    this.name = name;
    this.username = username;
    this.reply = reply;
    this.like = like;
    this.date = date;
    this.tweet = tweet;
    this.list_replyers = [];
    this.replyersLenght = 0;
    this.thread_list_tweet = [];
    this.replyers = function (name,username,tweet,reply,like,date) {
        this.list_replyers.push({
            name,
            username,
            reply,
            like,
            date,
            tweet,
        });
        this.replyersLenght++;
    }
}

export default TweetUser;
