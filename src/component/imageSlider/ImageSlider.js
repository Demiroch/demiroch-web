import Licence2 from '../../resources/Licencias/Drrivers_License_Gideon.png';
import Licence4 from '../../resources/Licencias/Drrivers_License_MArcoDiaz.png';
import Licence3 from '../../resources/Licencias/Drrivers_License_Abyo.png';
import Licence1 from '../../resources/Licencias/Drrivers_License_Sprig.png';
import Cassete from "../../component/cassete/Cassete";
import CasseteArgActing from "../../resources/Mobile/Cassettes/Cassettes_ARGActing.png";
import CasseteArgVoiceOver from "../../resources/Mobile/Cassettes/Cassettes_ARGVoiceOver.png";
import CasseteCrazyVoices from "../../resources/Mobile/Cassettes/Cassettes_CrazyVoices.png";
import CasseteSongs from "../../resources/Mobile/Cassettes/Cassettes_Songs.png";
import CasseteEspNeutro from "../../resources/Mobile/Cassettes/Cassettes_ENGLISH.png";
import CasseteLocuciones from "../../resources/Mobile/Cassettes/Cassettes_LocNeutro.png";
import SongsAudio from "../../resources/Audio/songs.mp3";
import CrazyVoicesAudio from "../../resources/Audio/crazy-voices.mp3";
import ArgActingAudio from "../../resources/Audio/arg-acting.mp3";
import ArgVoiceOverAudio from "../../resources/Audio/arg-voice-over.mp3";
import EnglishAudio from "../../resources/Audio/english.mp3";
import EspanolNeutroAudio from "../../resources/Audio/espanol-neutro.mp3";
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
                    <div className={"carousel-image-container item__third "}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={src}
                            alt={alt}/>
                    </div>
                </Carousel.Item>
    }
    const casseteClass = isForCassete ? "cassete-arrow" : "";

    const getLeftIcon = () => {
        return <img src={left} className={"arrow-carousel " + casseteClass} id="left-arrow"  alt="Left-Arrow"/>;
    }

    const getRightIcon = () => {
        return <img src={right} className={"arrow-carousel " + casseteClass} id="right-arrow" alt="Right-Arrow"/>;
    }

    const getCarouselInterval = () => {
        return isForCassete ? null : 2000;
    }

    const clickOnSlider = (videoSrcFromClick, title) => {
        setShowModal(true);
        setVideoSrc(videoSrcFromClick)
        setmMdalTitle(title)
    }

    const getCarouselCassete = (src, id, audioSrc, audioName) => {
        return <Carousel.Item className="carousel-item-custom cassete-item clickable" >
            <div className="carousel-image-container item__third margin-cassete">
                <Cassete id={id} className="cassete-for-all" src={src} audio="" isMobile={isMobile} audioSrc={audioSrc} audioName={audioName}/>
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
                      controls={true}
                      prevIcon={getLeftIcon()}
                      nextIcon={getRightIcon()}
                      className={`slider-container show-neighbors ${className}`}
                      activeIndex={index}
                      onSelect={handleSelect}
                      interval={getCarouselInterval()}
                      onSlide={stopAudios}
                      touch={true}>
                {isForCassete ? getCarouselCassete(CasseteEspNeutro, "esp-neutro", EnglishAudio, "DEMIROCH - ENGLISH VO") : ""}
                {isForCassete ? getCarouselCassete(CasseteLocuciones, "locuciones", EspanolNeutroAudio, "DEMIROCH - LOCUCION - ARG") : ""}
                {isForCassete ?   getCarouselCassete(CasseteArgActing, "arg-acting", ArgActingAudio, "DEMIROCH - ACTING - ARG") : ""}
                {isForCassete ?   getCarouselCassete(CasseteSongs, "songs", SongsAudio, "DEMIROCH - CANCIONES") : ""}
                {isForCassete ?  getCarouselCassete(CasseteCrazyVoices, "crazy-notes", CrazyVoicesAudio, "DEMIROCH - VOCES LOCAS") : ""}
                {isForCassete ?  getCarouselCassete(CasseteArgVoiceOver, "arg-voice-over", ArgVoiceOverAudio, "DEMIROCH - NEUTRO") : ""}

                {isForCassete ? "" : getCarouselLicence(Licence1, "AMPHIBIA", "https://www.youtube.com/embed/T4mFMQMDBfA")}
                {isForCassete ? "" : getCarouselLicence(Licence2, "GRAVITY FALLS", "https://www.youtube.com/embed/7ZAAvwtDE8o")}
                {isForCassete ? "" : getCarouselLicence(Licence3, "PUKKA", "https://www.youtube.com/embed/5gnoRHG3-MU")}
                {isForCassete ? "" : getCarouselLicence(Licence4, "MEWNI", "https://www.youtube.com/embed/1EmLRcXq7nA")}
            </Carousel>
            <audio id="esp-neutro-audio" src={EnglishAudio}/>
            <audio id="locuciones-audio" src={EspanolNeutroAudio}/>
            <audio id="arg-acting-audio" src={ArgActingAudio}/>
            <audio id="songs-audio" src={SongsAudio}/>
            <audio id="crazy-notes-audio" src={CrazyVoicesAudio}/>
            <audio id="arg-voice-over-audio" src={ArgVoiceOverAudio}/>

            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle} isMobile={isMobile}/>
        </div>
    );
}
