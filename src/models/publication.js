export class Publication {

    constructor(username,
        userAvatar,
        datetime,
        title,
        isMovie,
        showName,
        grade,
        hasInNetflix,
        image,
        review) {
            this.username = username;
            this.userAvatar = userAvatar;
            this.datetime = datetime;
            this.title = title;
            this.isMovie = isMovie;
            this.showName = showName;
            this.grade = grade;
            this.hasInNetflix = hasInNetflix;
            this.image = image;
            this.review = review;
    }

}