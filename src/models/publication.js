export class Publication {

    constructor(
        id,
        userId,
        username,
        userAvatar,
        datetime,
        title,
        isShow,
        showName,
        grade,
        hasInNetflix,
        image,
        review) {
            this.username = username;
            this.userAvatar = userAvatar;
            this.datetime = datetime;
            this.title = title;
            this.isShow = isShow;
            this.showName = showName;
            this.grade = grade;
            this.hasInNetflix = hasInNetflix;
            this.image = image;
            this.review = review;
    }

}