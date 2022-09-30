import Licence2 from '../../resources/Licencias/Drrivers_License_Gideon.png';
import Licence4 from '../../resources/Licencias/Drrivers_License_MArcoDiaz.png';
import Licence3 from '../../resources/Licencias/Drrivers_License_Abyo.png';
import Licence1 from '../../resources/Licencias/Drrivers_License_Sprig.png';
import left from '../../resources/Iconos/Demiroch_arrows_Left.png';
import right from '../../resources/Iconos/Demiroch_arrows_Right.png';
import "./ImageSlider.css"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import VideoModal from "../videoModal/VideoModal";

export default function ImageSlider({showIndicators, showControls}) {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [modalTitle, setmMdalTitle] = useState("");


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const getCarouselItem = (src, alt, videoSrcFromClick) => {
        return <Carousel.Item className="carousel-item-custom clickable" onClick={() => clickOnSlider(videoSrcFromClick, alt)}>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100 carousel-image"
                            src={src}
                            alt={alt}/>
                    </div>
                </Carousel.Item>
    }

    const getLeftIcon = () => {
        return <img src={left} className="arrow-carousel" id="left-arrow"  alt="Left-Arrow"/>;
    }

    const getRightIcon = () => {
        return <img src={right} className="arrow-carousel" id="right-arrow" alt="Right-Arrow"/>;
    }

    const clickOnSlider = (videoSrcFromClick, title) => {
        setShowModal(true);
        setVideoSrc(videoSrcFromClick)
        setmMdalTitle(title)
    }

    return (
        <div>
            <Carousel variant="dark"
                      indicators={showIndicators}
                      controls={showControls}
                      prevIcon={getLeftIcon()}
                      nextIcon={getRightIcon()}
                      className="slider-container"
                      activeIndex={index}
                      onSelect={handleSelect}
                      // interval={null}
                      touch={true}>
                {getCarouselItem(Licence1, "AMPHIBIA", "https://www.youtube.com/embed/zeA3ItAoCaQ")}
                {getCarouselItem(Licence2, "GRAVITY FALLS", "https://www.youtube.com/embed/gWMcyYyVsjw")}
                {getCarouselItem(Licence3, "PUKKA", "https://www.youtube.com/embed/TrtlYgU3IFI")}
                {getCarouselItem(Licence4, "MEWNI", "https://www.youtube.com/embed/JBHv4D8e0bM")}
            </Carousel>
            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle}/>
        </div>
    );
}
