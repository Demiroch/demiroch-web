import React from 'react';
import "./LicencesSubView.css";
import ImageSlider from "../../../component/imageSlider/ImageSlider";
import BackgroundImage from "../../../resources/Mobile/Backgrounds/Inicio_Mobile_BK.png";
import Logo from "../../../resources/Logo/Logo_Demiroch.png";
import {Col, Container, Row} from "react-bootstrap";

export default function LicencesSubViewMobile(){

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
                        <ImageSlider showControls={false} showIndicators={true} isMobile={true} isForCassete={false}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}