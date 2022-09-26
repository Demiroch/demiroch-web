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
import {Col, Container, Row} from "react-bootstrap";

export default function CassetteSubView(){
    return (
        <section className="cassete-container" style={{backgroundImage: `url(${background})`, width: "100%", padding: "2%"}}>
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Cassete id="cassete-argentina-acting" className="" src={CasseteArgActing}/>
                        </Row>
                        <Row>
                            <Cassete id="cassete-argentina-acting" className="" src={CasseteArgVoiceOver}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Cassete id="cassete-argentina-acting" className="" src={CasseteCrazyVoices}/>
                        </Row>
                        <Row>
                            <Cassete id="cassete-argentina-acting" className="" src={CasseteSongs}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Cassete id="cassete-argentina-acting" className="" src={CasseteEspNeutro}/>
                        </Row>
                        <Row>
                            <Cassete id="cassete-argentina-acting" className="" src={CasseteLocuciones}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}