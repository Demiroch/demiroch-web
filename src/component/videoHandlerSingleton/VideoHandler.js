class VideoHandler {
    constructor() {
        this.actualVideo = 0;
        this.videos = [
            "https://www.youtube.com/embed/zeA3ItAoCaQ",
            "https://www.youtube.com/embed/gWMcyYyVsjw",
            "https://www.youtube.com/embed/TrtlYgU3IFI",
            "https://www.youtube.com/embed/JBHv4D8e0bM",
            "https://www.youtube.com/embed/-T9pxXteUmQ",
            "https://www.youtube.com/embed/dJyRl1bq9eg",
            "https://www.youtube.com/embed/ycuR_xsmGa0",
            "https://www.youtube.com/embed/MyRrRVp0ObU",
            "https://www.youtube.com/embed/sAeEuGHyduc",
            "https://www.youtube.com/embed/dI4v2IAPSnw",
            "https://www.youtube.com/embed/nQhNhXSUmDQ",
            "https://www.youtube.com/embed/zUmeVzfR1J0",
            "https://www.youtube.com/embed/lu8gXodHMWs",
            "https://www.youtube.com/embed/5aHWDN2V8L4"

        ];
        this.videosSrcIndexes = {
            "https://www.youtube.com/embed/zeA3ItAoCaQ": 0,
            "https://www.youtube.com/embed/gWMcyYyVsjw": 1,
            "https://www.youtube.com/embed/TrtlYgU3IFI": 2,
            "https://www.youtube.com/embed/JBHv4D8e0bM": 3,
            "https://www.youtube.com/embed/-T9pxXteUmQ": 4,
            "https://www.youtube.com/embed/dJyRl1bq9eg": 5,
            "https://www.youtube.com/embed/ycuR_xsmGa0": 6,
            "https://www.youtube.com/embed/MyRrRVp0ObU": 7,
            "https://www.youtube.com/embed/sAeEuGHyduc": 8,
            "https://www.youtube.com/embed/dI4v2IAPSnw": 9,
            "https://www.youtube.com/embed/nQhNhXSUmDQ": 10,
            "https://www.youtube.com/embed/zUmeVzfR1J0": 11,
            "https://www.youtube.com/embed/lu8gXodHMWs": 12,
            "https://www.youtube.com/embed/5aHWDN2V8L4": 13
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