import React from 'react';
import "./LicencesSubView.css";
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import BackgroundImage from "../../../resources/Backgrounds/Inicio_BK.png"
import Logo from "../../../resources/Logo/Logo_Demiroch.png";
import {Col, Container, Row} from "react-bootstrap";

export default function LicencesSubView(){
    return (
        <section className="licences-container" style={{backgroundImage: `url(${BackgroundImage})`}} >
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
            </Container>
        </section>
    )
}