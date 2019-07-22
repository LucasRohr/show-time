export class Recommendation {

    constructor(
        id,
        authorId,
        authorUsername,
        authorAvatar,
        recipientId,
        recipientUsername,
        recipientAvatar,
        datetime,
        title,
        isShow,
        showName,
        hasInNetflix,
        review) {
            this.id = id;
            this.authorId = authorId;
            this.authorUsername = authorUsername;
            this.authorAvatar = authorAvatar;
            this.recipientId = recipientId;
            this.recipientUsername = recipientUsername;
            this.recipientAvatar = recipientAvatar;
            this.datetime = datetime;
            this.title = title;
            this.isShow = isShow;
            this.showName = showName;
            this.hasInNetflix = hasInNetflix;
            this.review = review;
    }

}