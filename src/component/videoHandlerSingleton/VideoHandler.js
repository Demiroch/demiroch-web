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
            "https://www.youtube.com/embed/IxKWjY-A0Pk",
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
            "https://player.vimeo.com/video/760024295?h=a128b8ff26",
            "https://www.youtube.com/embed/dI4v2IAPSnw",

        ];
    }

    _getMobileIndexes() {
        return {
            "https://www.youtube.com/embed/zeA3ItAoCaQ": 0,  // lic
            "https://www.youtube.com/embed/gWMcyYyVsjw": 1,  // lic
            "https://www.youtube.com/embed/TrtlYgU3IFI": 2,  // lic
            "https://www.youtube.com/embed/JBHv4D8e0bM": 3,  // lic
            "https://www.youtube.com/embed/IxKWjY-A0Pk": 4,  // Latinafy
            "https://www.youtube.com/embed/-T9pxXteUmQ": 5,  // Cartoon
            "https://www.youtube.com/embed/ycuR_xsmGa0": 6,  // Mccain
            "https://www.youtube.com/embed/lu8gXodHMWs": 7, // Fernet
            "https://www.youtube.com/embed/1HK-T6wAo8E": 8,  // Fanclub
            "https://www.youtube.com/embed/zUmeVzfR1J0": 9, // Milka
            "https://www.youtube.com/embed/dJyRl1bq9eg": 10,  // Uala
            "https://www.youtube.com/embed/sAeEuGHyduc": 11,  // Sprite
            "https://www.youtube.com/embed/nQhNhXSUmDQ": 12, // Zamba
            "https://www.youtube.com/embed/MyRrRVp0ObU": 13,  // Kiko
            "https://www.youtube.com/embed/5aHWDN2V8L4": 14,  // Menu Del Día
            "https://player.vimeo.com/video/760024295?h=a128b8ff26": 15, // Theo
            "https://www.youtube.com/embed/dI4v2IAPSnw": 16, // Danonino
        }
    }

    _getWebVideos() {
        return [
            "https://www.youtube.com/embed/zeA3ItAoCaQ",
            "https://www.youtube.com/embed/gWMcyYyVsjw",
            "https://www.youtube.com/embed/TrtlYgU3IFI",
            "https://www.youtube.com/embed/JBHv4D8e0bM",
            "https://www.youtube.com/embed/-T9pxXteUmQ",
            "https://www.youtube.com/embed/IxKWjY-A0Pk",
            "https://www.youtube.com/embed/dJyRl1bq9eg",
            "https://www.youtube.com/embed/1HK-T6wAo8E",
            "https://www.youtube.com/embed/ycuR_xsmGa0",
            "https://www.youtube.com/embed/MyRrRVp0ObU",
            "https://player.vimeo.com/video/760024295?h=a128b8ff26",
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
            "https://www.youtube.com/embed/IxKWjY-A0Pk": 5,  // Latinafy
            "https://www.youtube.com/embed/dJyRl1bq9eg": 6,  // Uala
            "https://www.youtube.com/embed/1HK-T6wAo8E": 7,  // Fanclub
            "https://www.youtube.com/embed/ycuR_xsmGa0": 8,  // Mccain
            "https://www.youtube.com/embed/MyRrRVp0ObU": 9,  // Kiko
            "https://player.vimeo.com/video/760024295?h=a128b8ff26": 10, // Theo
            "https://www.youtube.com/embed/sAeEuGHyduc": 11,  // Sprite
            "https://www.youtube.com/embed/dI4v2IAPSnw": 12, // Danonino
            "https://www.youtube.com/embed/nQhNhXSUmDQ": 13, // Zamba
            "https://www.youtube.com/embed/zUmeVzfR1J0": 14, // Milka
            "https://www.youtube.com/embed/lu8gXodHMWs": 15, // Fernet
            "https://www.youtube.com/embed/5aHWDN2V8L4": 16  // Menu Del Día
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