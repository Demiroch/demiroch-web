import React, {useState} from 'react';
import "./ClientsSubView.css";
import ARCOR from "../../../resources/Clientes/ARCOR.png";
import BIGBOX from "../../../resources/Clientes/BIGBOX.png";
import CITRIC from "../../../resources/Clientes/CITRIC.png";
import CN from "../../../resources/Clientes/CN.png";
import DADA from "../../../resources/Clientes/DADA.png";
import ITAU from "../../../resources/Clientes/ITAU.png";
import NICK from "../../../resources/Clientes/NICK.png";
import PARAMOUNT from "../../../resources/Clientes/PARAMOUNT.png";
import RIPIO from "../../../resources/Clientes/RIPIO.png";
import SERENITO from "../../../resources/Clientes/SERENITO.png";
import SURA from "../../../resources/Clientes/SURA.png";
import UALI from "../../../resources/Clientes/UALI.png";
import VISITARG from "../../../resources/Clientes/VISITARG.png";
import YOY from "../../../resources/Clientes/YOY.png";
import DIRECTV from "../../../resources/Clientes/DIRECTV.png";
import Title from "../../../resources/Clientes/clients_title.png";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import VideoModal from "../../../component/videoModal/VideoModal";

export default function ClientsSubView(){
    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [modalTitle, setmMdalTitle] = useState("");
    const isMobile = window.innerWidth <= 1000;

    const clickOnImage = (videoSrcFromClick, title) => {
        setShowModal(true);
        setVideoSrc(videoSrcFromClick)
        setmMdalTitle(title)
    }

    const ClientImage = (props) => {

        return (
            <Col>
                <img onClick={() => clickOnImage(props.vidSrc, props.id)}
                      className="clients-image"
                      id={props.id+"-client"}
                      src={props.imgSrc}
                      alt={props.id}/>
            </Col>
        )
    }

    return (
        <div className="clients-container">
            <div id="clients-title-container" className="black-shadow">
                <img src={Title} id="clients-title-img" alt="clients-title"/>
            </div>
            <div id="clients-container" className="black-shadow">
                <Container fluid>
                    <Row xl={6} lg={5} xs={3}>
                        <ClientImage id="dada" imgSrc={DADA} vidSrc="https://www.youtube.com/embed/cYLxj9TOwTY"/>
                        <ClientImage id="citric" imgSrc={CITRIC} vidSrc="https://www.youtube.com/embed/vcCl1km4SMM"/>
                        <ClientImage id="serenito" imgSrc={SERENITO} vidSrc="https://www.youtube.com/embed/qB6jz-MII_I"/>
                        <ClientImage id="uali" imgSrc={UALI} vidSrc="https://www.youtube.com/embed/CGmwR6F9N2E"/>
                        <ClientImage id="sura" imgSrc={SURA} vidSrc="https://www.youtube.com/embed/dHLnMkm34IY"/>
                        <ClientImage id="yoy" imgSrc={YOY} vidSrc="https://www.youtube.com/embed/rKJXgaT8KQY"/>
                        <ClientImage id="directv" imgSrc={DIRECTV} vidSrc="https://www.youtube.com/embed/x_J8CJF-6BU"/>
                        <ClientImage id="cn" imgSrc={CN} vidSrc={"https://www.youtube.com/embed/77dmyD06lz4"}/>
                        <ClientImage id="paramount" imgSrc={PARAMOUNT} vidSrc="https://www.youtube.com/embed/Wtdp22jK0YE"/>
                        <ClientImage id="arcor" imgSrc={ARCOR} vidSrc={"https://www.youtube.com/embed/sct-0Livw4Y?si=aDmu_wlNqdReLdZl"}/>
                        <ClientImage id="ripio" imgSrc={RIPIO} vidSrc={"https://www.youtube.com/embed/JXolYWV5yEM"}/>
                        <ClientImage id="bigbox" imgSrc={BIGBOX} vidSrc="https://www.youtube.com/embed/wK01Oo9-HeA"/>
                        <ClientImage id="itau" imgSrc={ITAU} vidSrc="https://www.youtube.com/embed/5V4rRblAGXU"/>
                        <ClientImage id="visitarg" imgSrc={VISITARG} vidSrc="https://www.youtube.com/embed/igxKVSYSf-E"/>
                        <ClientImage id="nick" imgSrc={NICK} vidSrc="https://www.youtube.com/embed/by-BncmLj_Y"/>
                    </Row>
                </Container>
                <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle} isMobile={isMobile}/>
            </div>
        </div>
    )
}