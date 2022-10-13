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
            "https://www.youtube.com/embed/zeA3ItAoCaQ",
            "https://www.youtube.com/embed/gWMcyYyVsjw",
            "https://www.youtube.com/embed/TrtlYgU3IFI",
            "https://www.youtube.com/embed/JBHv4D8e0bM",
            "https://www.youtube.com/embed/-T9pxXteUmQ",
            "https://www.youtube.com/embed/ycuR_xsmGa0",
            "https://www.youtube.com/embed/lu8gXodHMWs",
            "https://www.youtube.com/embed/1HK-T6wAo8E",
            "https://www.youtube.com/embed/zUmeVzfR1J0",
            "https://www.youtube.com/embed/dJyRl1bq9eg",
            "https://www.youtube.com/embed/sAeEuGHyduc",
            "https://www.youtube.com/embed/nQhNhXSUmDQ",
            "https://www.youtube.com/embed/MyRrRVp0ObU",
            "https://www.youtube.com/embed/5aHWDN2V8L4",
            "https://www.youtube.com/embed/dI4v2IAPSnw",

        ];
    }

    _getMobileIndexes() {
        return {
            "https://www.youtube.com/embed/zeA3ItAoCaQ": 0,  // lic
            "https://www.youtube.com/embed/gWMcyYyVsjw": 1,  // lic
            "https://www.youtube.com/embed/TrtlYgU3IFI": 2,  // lic
            "https://www.youtube.com/embed/JBHv4D8e0bM": 3,  // lic
            "https://www.youtube.com/embed/-T9pxXteUmQ": 4,  // Cartoon
            "https://www.youtube.com/embed/ycuR_xsmGa0": 5,  // Mccain
            "https://www.youtube.com/embed/lu8gXodHMWs": 6, // Fernet
            "https://www.youtube.com/embed/1HK-T6wAo8E": 7,  // Fanclub
            "https://www.youtube.com/embed/zUmeVzfR1J0": 8, // Milka
            "https://www.youtube.com/embed/dJyRl1bq9eg": 9,  // Uala
            "https://www.youtube.com/embed/sAeEuGHyduc": 10,  // Sprite
            "https://www.youtube.com/embed/nQhNhXSUmDQ": 11, // Zamba
            "https://www.youtube.com/embed/MyRrRVp0ObU": 12,  // Kiko
            "https://www.youtube.com/embed/5aHWDN2V8L4": 13,  // Menu Del Día
            "https://www.youtube.com/embed/dI4v2IAPSnw": 14, // Danonino
        }
    }

    _getWebVideos() {
        return [
            "https://www.youtube.com/embed/zeA3ItAoCaQ",
            "https://www.youtube.com/embed/gWMcyYyVsjw",
            "https://www.youtube.com/embed/TrtlYgU3IFI",
            "https://www.youtube.com/embed/JBHv4D8e0bM",
            "https://www.youtube.com/embed/-T9pxXteUmQ",
            "https://www.youtube.com/embed/dJyRl1bq9eg",
            "https://www.youtube.com/embed/1HK-T6wAo8E",
            "https://www.youtube.com/embed/ycuR_xsmGa0",
            "https://www.youtube.com/embed/MyRrRVp0ObU",
            "https://www.youtube.com/embed/sAeEuGHyduc",
            "https://www.youtube.com/embed/dI4v2IAPSnw",
            "https://www.youtube.com/embed/nQhNhXSUmDQ",
            "https://www.youtube.com/embed/zUmeVzfR1J0",
            "https://www.youtube.com/embed/lu8gXodHMWs",
            "https://www.youtube.com/embed/5aHWDN2V8L4"

        ];
    }

    _getWebIndexes() {
        return {
            "https://www.youtube.com/embed/zeA3ItAoCaQ": 0,  // lic
            "https://www.youtube.com/embed/gWMcyYyVsjw": 1,  // lic
            "https://www.youtube.com/embed/TrtlYgU3IFI": 2,  // lic
            "https://www.youtube.com/embed/JBHv4D8e0bM": 3,  // lic
            "https://www.youtube.com/embed/-T9pxXteUmQ": 4,  // Cartoon
            "https://www.youtube.com/embed/dJyRl1bq9eg": 5,  // Uala
            "https://www.youtube.com/embed/1HK-T6wAo8E": 6,  // Fanclub
            "https://www.youtube.com/embed/ycuR_xsmGa0": 7,  // Mccain
            "https://www.youtube.com/embed/MyRrRVp0ObU": 8,  // Kiko
            "https://www.youtube.com/embed/sAeEuGHyduc": 9,  // Sprite
            "https://www.youtube.com/embed/dI4v2IAPSnw": 10, // Danonino
            "https://www.youtube.com/embed/nQhNhXSUmDQ": 11, // Zamba
            "https://www.youtube.com/embed/zUmeVzfR1J0": 12, // Milka
            "https://www.youtube.com/embed/lu8gXodHMWs": 13, // Fernet
            "https://www.youtube.com/embed/5aHWDN2V8L4": 14  // Menu Del Día
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