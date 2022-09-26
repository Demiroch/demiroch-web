import React from 'react';
import "./LicencesSubView.css";
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import BackgroundImage from "../../../resources/Backgrounds/Inicio_BK.png"
import Logo from "../../../resources/Logo/Logo_Demiroch.png";
import {Col, Container, Row} from "react-bootstrap";
import Huella from "../../../resources/Misc/FingerPrint_Demian.png";

export default function LicencesSubView(){
    return (
        <section className="licences-container black-shadow" style={{backgroundImage: `url(${BackgroundImage})`, zIndex: 2, position: "relative", display: "block"}}>
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <img src={Logo} id="demiroch-logo" alt="logo-demiroch"/>
                            <p id="logo-description">WANTED FOR IDENTITY THEFT</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ImageSlider></ImageSlider>
                    </Col>
                </Row>
                <Row>
                    <div id="fingerprint-damian-container" className="black-shadow">
                        <img src={Huella} id="fingerprint-damian" alt="huella-dactilar"/>
                    </div>
                </Row>
            </Container>
        </section>
    )
}