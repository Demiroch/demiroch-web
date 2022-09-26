import React from 'react';
import "./CasseteSubView.css";
import Cassete from "../../../component/Cassete/Cassete";
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

export default function CassetteSubView(){
    return (
        <section className="cassete-container" style={{backgroundImage: `url(${background})`}}>
            <Container fluid id="container-demos">
                <Row>
                    <div id="demos-title">
                        <img src={DemosTitle} alt={"demos-title"}/>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Cassete id="crazy-notes" className="cassete-for-all" src={CasseteCrazyVoices} audio={new Audio(CrazyVoicesAudio)}/>
                        </Row>
                        <Row>
                            <Cassete id="songs" className="cassete-for-all" src={CasseteSongs} audio={new Audio(CrazyVoicesAudio)}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Cassete id="arg-acting" className="cassete-for-all" src={CasseteArgActing} audio={new Audio(CrazyVoicesAudio)}/>
                        </Row>
                        <Row>
                            <Cassete id="locuciones" className="cassete-for-all" src={CasseteLocuciones} audio={new Audio(CrazyVoicesAudio)}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Cassete id="esp-neutro" className="cassete-for-all" src={CasseteEspNeutro} audio={new Audio(CrazyVoicesAudio)}/>
                        </Row>
                        <Row>
                            <Cassete id="arg-voice-over" className="cassete-for-all" src={CasseteArgVoiceOver} audio={new Audio(CrazyVoicesAudio)}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}