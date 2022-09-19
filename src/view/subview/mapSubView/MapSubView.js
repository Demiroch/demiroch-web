import React from 'react';
import "./MapSubView.css";
import {Col, Container, Row} from "react-bootstrap";

// Misc
import Huella from "../../../resources/Misc/FingerPrint_Demian.png";
import Blueprint from "../../../resources/Misc/Mic_Blueprint.png";

//Publis
import Uala from "../../../resources/FotosPublicidades/uala.png";
import MenuDelDia from "../../../resources/FotosPublicidades/menuDelDia.png";
import Sprite from "../../../resources/FotosPublicidades/Sprite.png";
import Mccain from "../../../resources/FotosPublicidades/mccain.png";
import Mapa from "../../../resources/Misc/Mapa_BA.png";
import Latinafy from "../../../resources/FotosPublicidades/latinafy.png";
import CartoonNetwork from "../../../resources/FotosPublicidades/CN.png";
import Danonino from "../../../resources/FotosPublicidades/danonino2.png";
import Milka from "../../../resources/FotosPublicidades/milka.png";
import Fernet from "../../../resources/FotosPublicidades/branca.png";

// Notas filmografía
import TvSeries from "../../../resources/NotasFilmografía/Filmografia_1_tvymovies.png"
import AnimatedSeries from "../../../resources/NotasFilmografía/Filmografia_2_seriesanim.png";

// Sticky notes
import VoiceActorNote from "../../../resources/StickyNotes/stickyNote_VOICE_ACTOR.png";
import ArtistNote from "../../../resources/StickyNotes/stickyNote_ARTIST.png";
import ActorNote from "../../../resources/StickyNotes/stickyNote_ACTOR.png";
import ContentCreatorNote from "../../../resources/StickyNotes/stickyNote_CONTENT_CREATOR.png";
import SoundProductionNote from "../../../resources/StickyNotes/stickyNote_SOUND_PRODUCTION.png";

// Fotos Personajes
import Kiko from "../../../resources/FotosPersonajes/UNDERDOGS-KIKOphoto.png";
import Theo from "../../../resources/FotosPersonajes/Theophoto.png";
import EvanTreborn from "../../../resources/FotosPersonajes/ElEfectoMariposaphoto.png";
import Zamba from "../../../resources/FotosPersonajes/zambaphoto.png";

// import Note from "../../../resources/FotosPersonajes/etiquetas_fotos.png";
import Threads from "../../../resources/Misc/Hilos.png";

export default function MapSubView(){
    return (
        <section className="map-container">
            {/*<div>*/}
            {/*    <img src={Threads} id="threads-mapa"/>*/}
            {/*</div>*/}
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <div id="fingerprint-damian-container" className="black-shadow">
                                <img src={Huella} id="fingerprint-damian" alt="huella-dactilar"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="relative-container">
                                <div id="map-image-container">
                                    <img src={Mapa} id="mapaBa-misc" alt="mapa"/>
                                </div>
                                <Row>
                                    <div id="latinafy-container" className="black-shadow">
                                        <img src={Latinafy} id="latinafy-publicidades" className="clickable" alt="latinafy"/>
                                    </div>
                                </Row>
                                <Row>
                                    <div id="animated-series-note-container" className="black-shadow">
                                        <img src={AnimatedSeries} id="animated-series-note" alt="latinafy"/>
                                    </div>
                                </Row>
                            </div>
                        </Row>
                        <Row>
                            <div id="milka-publicidad-container" className="black-shadow">
                                <img src={Milka} id="milka-publicidad" className="clickable" alt="latinafy"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="relative-container">
                                <div id="cartoon-network-container" className="black-shadow">
                                    <img src={CartoonNetwork} id="cartoon-network-publicidad" className="clickable" alt="cartoonetwork"/>
                                </div>
                                <div id="voice-actor-container" className="black-shadow">
                                    <img src={VoiceActorNote} id="voice-actor-note" alt="voice-actor-note"/>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div id="danonino-container" className="black-shadow">
                                <img src={Danonino} id="danonino-publicidad" className="clickable" alt="danonino"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="content-creator-container" className="black-shadow">
                                <img src={ContentCreatorNote} id="content-creator" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="actor-container" className="black-shadow">
                                <img src={ActorNote} id="actor-note" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="sound-container" className="black-shadow">
                                <img src={SoundProductionNote} id="sound-note" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="fernet-container" className="black-shadow">
                                <img src={Fernet} id="fernet-publicidad" className="clickable" alt="fernet"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div id="blueprint-damian-container" className="black-shadow">
                            {/*<img src={Cinta} id="blueprint-damian" alt="blueprint"/>*/}
                            <img src={Blueprint} id="blueprint-damian" alt="blueprint"/>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="uala-publicidad" >
                                <img className="fotos-publicidades-mapa clickable" src={Uala} alt="uala"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="menudeldia-publicidad">
                                <img className="fotos-publicidades-mapa clickable"  src={Mccain} alt="menudeldia"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="sprite-publicidad">
                                <img className="fotos-publicidades-mapa clickable"  src={Sprite} alt="sprite"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="mccain-publicidad">
                                <img className="fotos-publicidades-mapa clickable"  src={MenuDelDia} alt="mccain"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="tvSeries-notas">
                                <img className="fotos-publicidades-mapa" id="tvSeries-notas-img" src={TvSeries} alt="tvseries"/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}