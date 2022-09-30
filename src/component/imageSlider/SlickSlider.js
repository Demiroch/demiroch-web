import Slider from "react-slick";
import Licence1 from "../../resources/Licencias/Drrivers_License_Sprig.png";
import Licence2 from "../../resources/Licencias/Drrivers_License_Gideon.png";
import Licence3 from "../../resources/Licencias/Drrivers_License_Abyo.png";
import Licence4 from "../../resources/Licencias/Drrivers_License_MArcoDiaz.png";
import React, {useState} from "react";
import VideoModal from "../videoModal/VideoModal";

export default function SlickSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        adaptiveHeight: true
    };

    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [modalTitle, setmMdalTitle] = useState("");
    //className="carousel-image-container"
    //className="d-block w-100 carousel-image"
    const getCarouselItem = (src, alt, videoSrcFromClick) => {
        return <div  onClick={() => clickOnSlider(videoSrcFromClick, alt)} style={{maxWidth: "40%"}}>
                    <img
                        //
                        src={src}
                        alt={alt}/>
                </div>
    }

    const clickOnSlider = (videoSrcFromClick, title) => {
        setShowModal(true);
        setVideoSrc(videoSrcFromClick)
        setmMdalTitle(title)
    }

    return (
        <div>
            <Slider {...settings}>
                {getCarouselItem(Licence1, "AMPHIBIA", "https://www.youtube.com/embed/zeA3ItAoCaQ")}
                {getCarouselItem(Licence2, "GRAVITY FALLS", "https://www.youtube.com/embed/gWMcyYyVsjw")}
                {getCarouselItem(Licence3, "PUKKA", "https://www.youtube.com/embed/TrtlYgU3IFI")}
                {getCarouselItem(Licence4, "MEWNI", "https://www.youtube.com/embed/JBHv4D8e0bM")}
            </Slider>
            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle}/>
        </div>
    );

}