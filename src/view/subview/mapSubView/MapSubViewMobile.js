import React, {useState} from 'react';
import "./MapSubViewMobile.css";
import {Col, Container, Row} from "react-bootstrap";
import Threads from "../../../resources/Mobile/Misc/Hilos.png";
import VideoModal from "../../../component/videoModal/VideoModal";

// Publicidades
import Uala from "../../../resources/FotosPublicidades/uala_pin.png";
import MenuDelDia from "../../../resources/FotosPublicidades/menuDelDia_pin.png";
import Sprite from "../../../resources/FotosPublicidades/Sprite_pin.png";
import Mccain from "../../../resources/FotosPublicidades/mccain_pin.png";
import Latinafy from "../../../resources/FotosPublicidades/latinafy_pin.png";
import CartoonNetwork from "../../../resources/FotosPublicidades/CN.png";
import Danonino from "../../../resources/FotosPublicidades/danonino.png";
import Milka from "../../../resources/FotosPublicidades/milka.png";
import Fernet from "../../../resources/FotosPublicidades/branca_pin.png";
import FanClub from "../../../resources/FotosPublicidades/Fanclub_pin.png";

// Sticky notes
import FeaturedCommercial from "../../../resources/StickyNotes/stickyNote_Featured_Commercial.png";
import VoiceActorNote from "../../../resources/StickyNotes/stickyNote_VOICE_ACTOR.png";
import ArtistNote from "../../../resources/StickyNotes/stickyNote_ARTIST.png";
import ActorNote from "../../../resources/StickyNotes/stickyNote_ACTOR.png";
import ContentCreatorNote from "../../../resources/StickyNotes/stickyNote_CONTENT_CREATOR.png";
import SoundProductionNote from "../../../resources/StickyNotes/stickyNote_SOUND_PRODUCTION.png";

// Fotos Personajes
import Kiko from "../../../resources/FotosPersonajes/UNDERDOGS-KIKOphoto_pin.png";
import Theo from "../../../resources/FotosPersonajes/Theophoto_pin.png";
import EvanTreborn from "../../../resources/FotosPersonajes/ElEfectoMariposaphoto_pin.png";
import Zamba from "../../../resources/FotosPersonajes/zambaphoto_pin.png";
import ZambaNote from "../../../resources/FotosPersonajes/etiquetas_Zamba.png";
import EvanNote from "../../../resources/FotosPersonajes/etiquetas_Evan.png";
import TheoNote from "../../../resources/FotosPersonajes/etiquetas_Theo.png";
import KikoNote from "../../../resources/FotosPersonajes/etiquetas_Kiko.png";

export default function MapSubViewMobile(){
    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [modalTitle, setmMdalTitle] = useState("");

    const clickOnImage = (videoSrcFromClick, title) => {
        setShowModal(true);
        setVideoSrc(videoSrcFromClick)
        setmMdalTitle(title)
    }

    return (
        <section className="map-container">
            <div id="map-anchor"/>
            <div>
                <img src={Threads} id="threads-mapa" className="black-shadow" alt={"threads"}/>
            </div>
            <Container fluid id="mobile-map-container">
                <Row>
                    <Col>
                        <Row>
                            <div id="voice-actor-container" className="black-shadow">
                                <img src={VoiceActorNote} id="voice-actor-note" alt="voice-actor-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="latinafy-container" className="black-shadow">
                                <img src={Latinafy} id="latinafy-publicidades" alt="latinafy"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="mccain-publicidad">
                                <img className="fotos-publicidades-mapa clickable zoom-mini"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/ycuR_xsmGa0", "Mccain")}
                                     src={Mccain} alt="mccain"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="fernet-container" className="black-shadow zoom-mini">
                                <img src={Fernet} id="fernet-publicidad" className="clickable" alt="fernet"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/lu8gXodHMWs", "Fernet Branca")}/>
                            </div>
                        </Row>
                        <Row>
                            <div id="milka-publicidad-container" className="black-shadow">
                                <img src={Milka} id="milka-publicidad" className="clickable zoom" alt="milka"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/zUmeVzfR1J0", "Milka")}/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="sprite-publicidad">
                                <img className="fotos-publicidades-mapa clickable zoom-mini"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/sAeEuGHyduc", "Sprite")}
                                     src={Sprite} alt="sprite"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="kiko-container" className="black-shadow clickable zoom">
                                <img src={Kiko} className="personajes-img" alt="kiko-img"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/MyRrRVp0ObU", "Kiko")}/>
                            </div>
                            <div id="kiko-note-container" className="black-shadow">
                                <img src={KikoNote} className="personajes-img" alt="kiko-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="theo-container" className="black-shadow">
                                <img src={Theo} className="personajes-img" alt="theo-img"/>
                            </div>
                            <div id="theo-note-container" className="black-shadow">
                                <img src={TheoNote} className="personajes-img" alt="theo-note"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div id="cartoon-network-container" className="black-shadow">
                                <img src={CartoonNetwork} id="cartoon-network-publicidad" className="clickable" alt="cartoonetwork"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/-T9pxXteUmQ", "Cartoon Network")}/>
                            </div>
                        </Row>
                        <Row>
                            <div id="featured-commercial-note-container" className="black-shadow">
                                <img src={FeaturedCommercial} id="featured-commercial-note" alt="featured-commercial-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="fan-club-container">
                                <img src={FanClub} id="fan-club" alt="fan-club"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="content-creator-container" className="black-shadow">
                                <img src={ContentCreatorNote} id="content-creator" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="artistic-note-continer" className="black-shadow">
                                <img src={ArtistNote} id="artistic-note" alt="artistic-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="sound-container" className="black-shadow">
                                <img src={SoundProductionNote} id="sound-note" alt="sound-noe"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div id="evan-container" className="black-shadow">
                                <img src={EvanTreborn} className="personajes-img" alt="evan-img"/>
                            </div>
                            <div id="evan-note-container" className="black-shadow">
                                <img src={EvanNote} className="personajes-img" alt="evan-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="uala-publicidad" >
                                <img className="fotos-publicidades-mapa clickable zoom-mini"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/dJyRl1bq9eg", "Ualá")}
                                     src={Uala} alt="uala"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="zamba-container" className="black-shadow clickable zoom">
                                <img src={Zamba} className="personajes-img" alt="zamba-img"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/nQhNhXSUmDQ", "Zamba")}/>
                            </div>
                            <div id="zamba-note-container" className="black-shadow">
                                <img src={ZambaNote} className="personajes-img" alt="zamba-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="menudeldia-publicidad">
                                <img className="fotos-publicidades-mapa clickable zoom-mini"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/5aHWDN2V8L4", "Menu del Día")}
                                     src={MenuDelDia} alt="menu-del-dia"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="danonino-container" className="black-shadow zoom-mini">
                                <img src={Danonino} id="danonino-publicidad" className="clickable" alt="danonino"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/dI4v2IAPSnw", "Danonino")}/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle} isMobile={true}/>
        </section>
    )
}