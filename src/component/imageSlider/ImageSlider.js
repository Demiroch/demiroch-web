import Licence2 from '../../resources/Licencias/Drrivers_License_Gideon.png';
import Licence4 from '../../resources/Licencias/Drrivers_License_MArcoDiaz.png';
import Licence3 from '../../resources/Licencias/Drrivers_License_Abyo.png';
import Licence1 from '../../resources/Licencias/Drrivers_License_Sprig.png';
import Cassete from "../../component/cassete/Cassete";
import CasseteArgActing from "../../resources/Mobile/Cassettes/Cassettes_ARGActing.png";
import CasseteArgVoiceOver from "../../resources/Mobile/Cassettes/Cassettes_ARGVoiceOver.png";
import CasseteCrazyVoices from "../../resources/Mobile/Cassettes/Cassettes_CrazyVoices.png";
import CasseteSongs from "../../resources/Mobile/Cassettes/Cassettes_Songs.png";
import CasseteEspNeutro from "../../resources/Mobile/Cassettes/Cassettes_ESPNeutro.png";
import CasseteLocuciones from "../../resources/Mobile/Cassettes/Cassettes_LocNeutro.png";
import CrazyVoicesAudio from "../../resources/Audio/nothing-yet.mp3";
import left from '../../resources/Iconos/Demiroch_arrows_Left.png';
import right from '../../resources/Iconos/Demiroch_arrows_Right.png';
import "./ImageSlider.css"
import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import VideoModal from "../videoModal/VideoModal";
import $ from "jquery";

export default function ImageSlider({showIndicators, showControls, isMobile, isForCassete, className}) {
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
    }, [isForCassete, isMobile]);

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

    const getCarouselCassete = (src, id, audioSrc) => {
        return <Carousel.Item className="carousel-item-custom cassete-item clickable" >
            <div className="carousel-image-container item__third">
                <Cassete id={id} className="cassete-for-all" src={src} audio="" isMobile={isMobile} audioSrc={audioSrc}/>
            </div>
        </Carousel.Item>
    }

    const ids = [
        "esp-neutro",
        "locuciones",
        "arg-acting",
        "songs",
        "crazy-notes",
        "arg-voice-over"
    ]

    const stopAudios = () => {
        if (isForCassete) {
            ids.forEach(function (item) {
                $('#' + item + '-audio')[0].pause();
                $(".button-play-"  + item).hide();
            });
        }
    }

    return (
        <div>
            <Carousel variant="dark"
                      indicators={showIndicators}
                      controls={showControls}
                      prevIcon={getLeftIcon()}
                      nextIcon={getRightIcon()}
                      className={`slider-container show-neighbors ${className}`}
                      activeIndex={index}
                      onSelect={handleSelect}
                      interval={null}
                      onSlide={stopAudios}
                      touch={true}>
                {isForCassete ? getCarouselCassete(CasseteEspNeutro, "esp-neutro", CrazyVoicesAudio) : ""}
                {isForCassete ? getCarouselCassete(CasseteLocuciones, "locuciones", CrazyVoicesAudio) : ""}
                {isForCassete ?   getCarouselCassete(CasseteArgActing, "arg-acting", CrazyVoicesAudio) : ""}
                {isForCassete ?   getCarouselCassete(CasseteSongs, "songs", CrazyVoicesAudio) : ""}
                {isForCassete ?  getCarouselCassete(CasseteCrazyVoices, "crazy-notes", CrazyVoicesAudio) : ""}
                {isForCassete ?  getCarouselCassete(CasseteArgVoiceOver, "arg-voice-over", CrazyVoicesAudio) : ""}

                {isForCassete ? "" : getCarouselLicence(Licence1, "AMPHIBIA", "https://www.youtube.com/embed/zeA3ItAoCaQ")}
                {isForCassete ? "" : getCarouselLicence(Licence2, "GRAVITY FALLS", "https://www.youtube.com/embed/gWMcyYyVsjw")}
                {isForCassete ? "" : getCarouselLicence(Licence3, "PUKKA", "https://www.youtube.com/embed/TrtlYgU3IFI")}
                {isForCassete ? "" : getCarouselLicence(Licence4, "MEWNI", "https://www.youtube.com/embed/JBHv4D8e0bM")}
            </Carousel>
            <audio id="esp-neutro-audio" src={CrazyVoicesAudio}/>
            <audio id="locuciones-audio" src={CrazyVoicesAudio}/>
            <audio id="arg-acting-audio" src={CrazyVoicesAudio}/>
            <audio id="songs-audio" src={CrazyVoicesAudio}/>
            <audio id="crazy-notes-audio" src={CrazyVoicesAudio}/>
            <audio id="arg-voice-over-audio" src={CrazyVoicesAudio}/>

            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle} isMobile={isMobile}/>
        </div>
    );
}
