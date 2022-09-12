import React from 'react';
import "./MapSubView.css";
import Huella from "../../../resources/Misc/FingerPrint_Demian.png";
import Blueprint from "../../../resources/Misc/Mic_Blueprint.png";
import Uala from "../../../resources/FotosPublicidades/uala.png";
import MenuDelDia from "../../../resources/FotosPublicidades/menu del dia.png";
import Sprite from "../../../resources/FotosPublicidades/Sprite.png";
import Mccain from "../../../resources/FotosPublicidades/mccain.png";
import TvSeries from "../../../resources/NotasFilmografía/Filmografia_1_tvymovies.png"
import Mapa from "../../../resources/Misc/Mapa_BA.png";
import Latinafy from "../../../resources/FotosPublicidades/latinafy.png";
import CartoonNetwork from "../../../resources/FotosPublicidades/CN.png";
import Danonino from "../../../resources/FotosPublicidades/danonino2.png";
import Milka from "../../../resources/FotosPublicidades/milka.png";
// import Fernet from "../../../resources/FotosPublicidades/branca.png";
import AnimatedSeries from "../../../resources/NotasFilmografía/Filmografia_2_seriesanim.png";
import {Col, Container, Row} from "react-bootstrap";

export default function MapSubView(){
    return (
        <section className="map-container">
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <div id="fingerprint-damian-container">
                                <img src={Huella} id="fingerprint-damian" alt="huella-dactilar"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="map-container">
                                <div id="map-image-container">
                                    <img src={Mapa} id="mapaBa-misc" alt="mapa"/>
                                </div>
                                <Row>
                                    <div id="latinafy-container" className="black-shadow">
                                        <img src={Latinafy} id="latinafy-publicidades" alt="latinafy"/>
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
                                <img src={Milka} id="milka-publicidad" alt="latinafy"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div id="cartoon-network-container" className="black-shadow">
                                <img src={CartoonNetwork} id="cartoon-network-publicidad" alt="cartoonetwork"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="danonino-container" className="black-shadow">
                                <img src={Danonino} id="danonino-publicidad" alt="danonino"/>
                            </div>
                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>
                        <Row>
                            {/*<div id="danonino-container" className="black-shadow">*/}
                            {/*    <img src={Fernet} id="danonino-publicidad" alt="danonino"/>*/}
                            {/*</div>*/}
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
                                <img className="fotos-publicidades-mapa" src={Uala} alt="uala"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="menudeldia-publicidad">
                                <img className="fotos-publicidades-mapa"  src={MenuDelDia} alt="menudeldia"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="sprite-publicidad">
                                <img className="fotos-publicidades-mapa"  src={Sprite} alt="sprite"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="mccain-publicidad">
                                <img className="fotos-publicidades-mapa"  src={Mccain} alt="mccain"/>
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