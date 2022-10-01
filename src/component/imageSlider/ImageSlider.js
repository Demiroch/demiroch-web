import Licence2 from '../../resources/Licencias/Drrivers_License_Gideon.png';
import Licence4 from '../../resources/Licencias/Drrivers_License_MArcoDiaz.png';
import Licence3 from '../../resources/Licencias/Drrivers_License_Abyo.png';
import Licence1 from '../../resources/Licencias/Drrivers_License_Sprig.png';
import Cassete from "../../component/cassete/Cassete";
import CasseteArgActing from "../../resources/Demos_Cassettes/Cassettes_ARGActing.png";
import CasseteArgVoiceOver from "../../resources/Demos_Cassettes/Cassettes_ARGVoiceOver.png";
import CasseteCrazyVoices from "../../resources/Demos_Cassettes/Cassettes_CrazyVoices.png";
import CasseteSongs from "../../resources/Demos_Cassettes/Cassettes_Songs.png";
import CasseteEspNeutro from "../../resources/Demos_Cassettes/Cassettes_ESPNeutro.png";
import CasseteLocuciones from "../../resources/Demos_Cassettes/Cassettes_LocucionESP.png";
import CrazyVoicesAudio from "../../resources/Audio/prueba-andy.mp3";
import left from '../../resources/Iconos/Demiroch_arrows_Left.png';
import right from '../../resources/Iconos/Demiroch_arrows_Right.png';
import "./ImageSlider.css"
import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import VideoModal from "../videoModal/VideoModal";
import $ from "jquery";

export default function ImageSlider({showIndicators, showControls, isMobile, isForCassete}) {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [modalTitle, setmMdalTitle] = useState("");

    useEffect(() => {
        let classToSearch = isForCassete ? ".cassete-item" : ".licence-item";
        if (isMobile) {
            $(classToSearch, '.show-neighbors').each(function(){
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }).each(function(){
                var prev = $(this).prev();
                if (!prev.length) {
                    prev = $(this).siblings(':last');
                }
                prev.children(':nth-last-child(2)').clone().prependTo($(this));
            });
        }
    }, []);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const getCarouselLicence = (src, alt, videoSrcFromClick) => {
        return <Carousel.Item className="carousel-item-custom licence-item clickable" onClick={() => clickOnSlider(videoSrcFromClick, alt)}>
                    <div className="carousel-image-container item__third">
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

    const getCarouselCassete = (src, id, audio) => {
        return <Carousel.Item className="carousel-item-custom cassete-item clickable" >
            <div className="carousel-image-container item__third">
                <Cassete id={id} className="cassete-for-all" src={src} audio={audio} isMobile={isMobile}/>
            </div>
        </Carousel.Item>
    }

    return (
        <div>
            <Carousel variant="dark"
                      indicators={showIndicators}
                      controls={showControls}
                      prevIcon={getLeftIcon()}
                      nextIcon={getRightIcon()}
                      className={`slider-container show-neighbors`}
                      activeIndex={index}
                      onSelect={handleSelect}
                      interval={null}
                      touch={true}>
                {isForCassete ? getCarouselCassete(CasseteEspNeutro, "esp-neutro", new Audio(CrazyVoicesAudio)) : ""}
                {isForCassete ? getCarouselCassete(CasseteLocuciones, "locuciones", new Audio(CrazyVoicesAudio)) : ""}
                {isForCassete ?   getCarouselCassete(CasseteArgActing, "arg-acting", new Audio(CrazyVoicesAudio)) : ""}
                {isForCassete ?   getCarouselCassete(CasseteSongs, "songs", new Audio(CrazyVoicesAudio)) : ""}
                {isForCassete ?  getCarouselCassete(CasseteCrazyVoices, "crazy-notes", new Audio(CrazyVoicesAudio)) : ""}
                {isForCassete ?  getCarouselCassete(CasseteArgVoiceOver, "arg-voice-over", new Audio(CrazyVoicesAudio)) : ""}
                {isForCassete ? "" : getCarouselLicence(Licence1, "AMPHIBIA", "https://www.youtube.com/embed/zeA3ItAoCaQ")}
                {isForCassete ? "" : getCarouselLicence(Licence2, "GRAVITY FALLS", "https://www.youtube.com/embed/gWMcyYyVsjw")}
                {isForCassete ? "" : getCarouselLicence(Licence3, "PUKKA", "https://www.youtube.com/embed/TrtlYgU3IFI")}
                {isForCassete ? "" : getCarouselLicence(Licence4, "MEWNI", "https://www.youtube.com/embed/JBHv4D8e0bM")}
            </Carousel>
            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle}/>
        </div>
    );
}
