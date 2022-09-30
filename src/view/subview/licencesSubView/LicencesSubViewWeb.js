import React from 'react';
import "./LicencesSubView.css";
import ImageSlider from "../../../component/imageSlider/ImageSlider";
import BackgroundImage from "../../../resources/Backgrounds/Inicio_BK.png"
import Logo from "../../../resources/Logo/Logo_Demiroch.png";
import {Col, Container, Row} from "react-bootstrap";
import Huella from "../../../resources/Misc/FingerPrint_Demian.png";
import GoDown from "../../../resources/Misc/WhereHasDemianBeen.png"
// import SlickSlider from "../../../component/imageSlider/SlickSlider";

export default function LicencesSubViewWeb(){
    return (
        <section className="licences-container black-shadow" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div id="home-anchor"/>
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
                        <ImageSlider showControls={true} showIndicators={false} className="black-shadow"/>
                        {/*<div className="slider-andy">*/}
                        {/*    <SlickSlider></SlickSlider>*/}
                        {/*</div>*/}
                    </Col>
                </Row>
                <Row>
                    <div id="fingerprint-damian-container" className="black-shadow">
                        <img src={Huella} id="fingerprint-damian" alt="huella-dactilar"/>
                    </div>
                </Row>
                <Row>
                    <div id="where-has-been-container" >
                        <img src={GoDown} alt="huella-dactilar"/>
                    </div>
                </Row>
            </Container>
        </section>
    )
}