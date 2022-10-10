import React, {useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Iframe from "../iFrame/IFrame";
import './VideoModal.css';
import {AiOutlineClose} from "react-icons/ai";
import $ from "jquery";
import VideoHandler from "../videoHandlerSingleton/VideoHandler";
import {MdOutlineArrowBackIosNew} from "react-icons/md";

export default function VideoModal({show, setShow, videoUrl, _title, isMobile}) {

    useEffect(() => {
        VideoHandler.setActualVideo(videoUrl);
    })

    const onClose = () => {
        setShow(false);
    }

    function onClickRight() {
        $("#iframe-modal").attr('src', VideoHandler.getNextVideo())
    }

    function onClickLeft() {
        $("#iframe-modal").attr('src', VideoHandler.getPreviousVideo())
    }

    return (
            <Modal
                size="xl"
                show={show}
                onHide={() => setShow(false)}
                scrollable={false}
                dialogClassName="custom-modal"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Body>
                    <div className="close-arrow">
                        <AiOutlineClose color={'white'} size={'10%'} onClick={onClose}/>
                    </div>
                    <Iframe src={videoUrl} id="iframe-modal" className="" title="" />
                    <div className="click-left-arrow" >
                        <MdOutlineArrowBackIosNew onClick={onClickLeft} style={{cursor: "pointer"}} color={"white"} size={"20%"}/>
                    </div>
                    <div className="click-right-arrow" >
                        <MdOutlineArrowBackIosNew onClick={onClickRight} style={{cursor: "pointer"}} color={"white"} size={"20%"}/>
                    </div>
                </Modal.Body>
            </Modal>
    );
}