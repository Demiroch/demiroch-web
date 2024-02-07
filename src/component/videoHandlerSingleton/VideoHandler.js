class VideoHandler {
    constructor() {
        this.actualVideo = 0;
        const isMobile = window.innerWidth <= 1000;

        if (isMobile) {
            this.videos = this._getMobileVideos();
            this.videosSrcIndexes = this._getMobileIndexes();
        } else {
            this.videos = this._getWebVideos();
            this.videosSrcIndexes = this._getWebIndexes();
        }
    }

    _getMobileVideos() {
        return [
            "https://www.youtube.com/embed/T4mFMQMDBfA",
            "https://www.youtube.com/embed/7ZAAvwtDE8o",
            "https://www.youtube.com/embed/5gnoRHG3-MU",
            "https://www.youtube.com/embed/1EmLRcXq7nA",
            "https://www.youtube.com/embed/IxKWjY-A0Pk",
            "https://www.youtube.com/embed/4xO54_nOfCM",
            "https://www.youtube.com/embed/ctkRSjTTTh4",
            "https://www.youtube.com/embed/aCHBJcSkqLI",
            "https://www.youtube.com/embed/kakRqIQtBTE",
            "https://www.youtube.com/embed/UcvpCWyiVnc",
            "https://www.youtube.com/embed/3ckmva6FNtM",
            "https://www.youtube.com/embed/OSlKRPdT9AA",
            "https://www.youtube.com/embed/zWOJQG6-hIs",
            "https://www.youtube.com/embed/gfixj1Fmclc",
            "https://www.youtube.com/embed/uq3rX5OX-nU",
            "https://www.youtube.com/embed/s296FJDWaEY",
            "https://www.youtube.com/embed/iHZvajuao_Y",

        ];
    }

    _getMobileIndexes() {
        return {
            "https://www.youtube.com/embed/T4mFMQMDBfA": 0,  // lic
            "https://www.youtube.com/embed/7ZAAvwtDE8o": 1,  // lic
            "https://www.youtube.com/embed/5gnoRHG3-MU": 2,  // lic
            "https://www.youtube.com/embed/1EmLRcXq7nA": 3,  // lic
            "https://www.youtube.com/embed/IxKWjY-A0Pk": 4,  // Latinafy
            "https://www.youtube.com/embed/4xO54_nOfCM": 5,  // Cartoon
            "https://www.youtube.com/embed/ctkRSjTTTh4": 6,  // Mccain
            "https://www.youtube.com/embed/aCHBJcSkqLI": 7, // Fernet
            "https://www.youtube.com/embed/kakRqIQtBTE": 8,  // Fanclub
            "https://www.youtube.com/embed/UcvpCWyiVnc": 9, // Milka
            "https://www.youtube.com/embed/3ckmva6FNtM": 10,  // Uala
            "https://www.youtube.com/embed/OSlKRPdT9AA": 11,  // Sprite
            "https://www.youtube.com/embed/zWOJQG6-hIs": 12, // Zamba
            "https://www.youtube.com/embed/gfixj1Fmclc": 13,  // Kiko
            "https://www.youtube.com/embed/uq3rX5OX-nU": 14,  // Menu Del Día
            "https://www.youtube.com/embed/s296FJDWaEY": 15, // Theo
            "https://www.youtube.com/embed/iHZvajuao_Y": 16, // Danonino
        }
    }

    _getWebVideos() {
        return [
            "https://www.youtube.com/embed/T4mFMQMDBfA",
            "https://www.youtube.com/embed/7ZAAvwtDE8o",
            "https://www.youtube.com/embed/5gnoRHG3-MU",
            "https://www.youtube.com/embed/1EmLRcXq7nA",
            "https://www.youtube.com/embed/4xO54_nOfCM",
            "https://www.youtube.com/embed/aCHBJcSkqLI",
            "https://www.youtube.com/embed/3ckmva6FNtM",
            "https://www.youtube.com/embed/kakRqIQtBTE",
            "https://www.youtube.com/embed/ctkRSjTTTh4",
            "https://www.youtube.com/embed/gfixj1Fmclc",
            "https://www.youtube.com/embed/s296FJDWaEY",
            "https://www.youtube.com/embed/OSlKRPdT9AA",
            "https://www.youtube.com/embed/iHZvajuao_Y",
            "https://www.youtube.com/embed/zWOJQG6-hIs",
            "https://www.youtube.com/embed/UcvpCWyiVnc",
            "https://www.youtube.com/embed/aCHBJcSkqLI",
            "https://www.youtube.com/embed/uq3rX5OX-nU"

        ];
    }

    _getWebIndexes() {
        return {
            "https://www.youtube.com/embed/T4mFMQMDBfA": 0,  // lic
            "https://www.youtube.com/embed/7ZAAvwtDE8o": 1,  // lic
            "https://www.youtube.com/embed/5gnoRHG3-MU": 2,  // lic
            "https://www.youtube.com/embed/1EmLRcXq7nA": 3,  // lic
            "https://www.youtube.com/embed/4xO54_nOfCM": 4,  // Cartoon
            "https://www.youtube.com/embed/IxKWjY-A0Pk": 5,  // Latinafy
            "https://www.youtube.com/embed/3ckmva6FNtM": 6,  // Uala
            "https://www.youtube.com/embed/kakRqIQtBTE": 7,  // Fanclub
            "https://www.youtube.com/embed/ctkRSjTTTh4": 8,  // Mccain
            "https://www.youtube.com/embed/gfixj1Fmclc": 9,  // Kiko
            "https://www.youtube.com/embed/s296FJDWaEY": 10, // Theo
            "https://www.youtube.com/embed/OSlKRPdT9AA": 11,  // Sprite
            "https://www.youtube.com/embed/iHZvajuao_Y": 12, // Danonino
            "https://www.youtube.com/embed/zWOJQG6-hIs": 13, // Zamba
            "https://www.youtube.com/embed/UcvpCWyiVnc": 14, // Milka
            "https://www.youtube.com/embed/aCHBJcSkqLI": 15, // Fernet
            "https://www.youtube.com/embed/uq3rX5OX-nU": 16  // Menu Del Día
        }
    }

    getNextVideo() {
        this.actualVideo = (this.actualVideo + 1) % this.videos.length;
        return this.videos[this.actualVideo];
    }

    getPreviousVideo() {
        this.actualVideo = (this.actualVideo - 1) % this.videos.length;
        return this.videos[this.actualVideo];
    }

    setActualVideo(actualVideoSrc) {
        this.actualVideo = this._getActualVideoIndex(actualVideoSrc);
    }

    _getActualVideoIndex(actualVideoSrc) {
        return this.videosSrcIndexes[actualVideoSrc];
    }
}
let handler = new VideoHandler();
export default handler;