import React from 'react';
import "./CasseteSubView.css";
import background from "../../../resources/Mobile/Backgrounds/BK_Demos_Mobile.png";
import DemosTitle from "../../../resources/Mobile/Misc/Titulo_Demos.png"
import {Container, Row} from "react-bootstrap";
import ImageSlider from "../../../component/imageSlider/ImageSlider";
import ClickToPlay from "../../../resources/Mobile/Misc/ClickToPlay.png";

export default function CassetteSubViewMobile(){
    return (
        <section className="cassete-container" style={{backgroundImage: `url(${background})`}}>
            <div id="cassete-anchor"/>
            <Container fluid id="container-demos">
                <Row>
                    <div id="demos-title">
                        <img src={DemosTitle} alt={"demos-title"}/>
                    </div>
                    <ImageSlider isMobile={true} showIndicators={true} showControls={false} isForCassete={true} className={"cassetes-mobile-container"}/>
                </Row>
                <Row>
                    <div id="click-top-play-cassete">
                        <img src={ClickToPlay} alt="click-to-play"/>
                    </div>
                </Row>
            </Container>
        </section>
    )
}