function TimeLine(username) {
    this.username = username;
    this.listTimeLine = [];
    this.addTweetToTimeLine = function (tweet) {
        this.listTimeLine.unshift(tweet);
    }
}

export default TimeLine;