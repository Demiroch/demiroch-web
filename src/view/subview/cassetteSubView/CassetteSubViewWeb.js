import React from 'react';
import "./CasseteSubView.css";
import Cassete from "../../../component/cassete/Cassete";
import CasseteArgActing from "../../../resources/Demos_Cassettes/Cassettes_ARGActing.png";
import CasseteArgVoiceOver from "../../../resources/Demos_Cassettes/Cassettes_ARGVoiceOver.png";
import CasseteCrazyVoices from "../../../resources/Demos_Cassettes/Cassettes_CrazyVoices.png";
import CasseteSongs from "../../../resources/Demos_Cassettes/Cassettes_Songs.png";
import CasseteEspNeutro from "../../../resources/Demos_Cassettes/Cassettes_ESPNeutro.png";
import CasseteLocuciones from "../../../resources/Demos_Cassettes/Cassettes_LocucionESP.png";
import background from "../../../resources/Backgrounds/BK_Demos.png";
import CrazyVoicesAudio from "../../../resources/Audio/prueba-andy.mp3";
import DemosTitle from "../../../resources/Misc/Titulo_Demos.png"
import {Col, Container, Row} from "react-bootstrap";

export default function CassetteSubViewWeb(){
    return (
        <section className="cassete-container" style={{backgroundImage: `url(${background})`}}>
            <div id="cassete-anchor"/>
            <Container fluid id="container-demos">
                <Row>
                    <div id="demos-title">
                        <img src={DemosTitle} alt={"demos-title"}/>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Cassete isMobile={false} id="crazy-notes" className="cassete-for-all" src={CasseteCrazyVoices} audio={new Audio(CrazyVoicesAudio)} audioSrc={CrazyVoicesAudio}/>
                        </Row>
                        <Row>
                            <Cassete isMobile={false} id="songs" className="cassete-for-all" src={CasseteSongs} audio={new Audio(CrazyVoicesAudio)} audioSrc={CrazyVoicesAudio}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Cassete isMobile={false} id="arg-acting" className="cassete-for-all" src={CasseteArgActing} audio={new Audio(CrazyVoicesAudio)} audioSrc={CrazyVoicesAudio}/>
                        </Row>
                        <Row>
                            <Cassete isMobile={false} id="locuciones" className="cassete-for-all" src={CasseteLocuciones} audio={new Audio(CrazyVoicesAudio)} audioSrc={CrazyVoicesAudio}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Cassete isMobile={false} id="esp-neutro" className="cassete-for-all" src={CasseteEspNeutro} audio={new Audio(CrazyVoicesAudio)} audioSrc={CrazyVoicesAudio}/>
                        </Row>
                        <Row>
                            <Cassete isMobile={false} id="arg-voice-over" className="cassete-for-all" src={CasseteArgVoiceOver} audio={new Audio(CrazyVoicesAudio)} audioSrc={CrazyVoicesAudio}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}