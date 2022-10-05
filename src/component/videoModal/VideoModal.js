import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Iframe from "../iFrame/IFrame";
import './VideoModal.css';
import {AiOutlineClose} from "react-icons/ai";

export default function VideoModal({show, setShow, videoUrl, _title, isMobile}) {

    function getCloseHeader() {
        return  <div className="prueba">
                    <AiOutlineClose color={'white'} size={'10%'} onClick={onClose}/>
                </div>
            // return      <Modal.Header closeButton style={{backgroundColor: "#646464"}}/>

    }

    const onClose = () => {
        setShow(false);
    }

    return (
            <Modal
                size="xl"
                show={show}
                onHide={() => setShow(false)}
                scrollable={false}
                // fullscreen="md-down"
                dialogClassName="custom-modal"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Body>
                    {getCloseHeader()}
                    <Iframe src={videoUrl} id="" className="" title="" />
                </Modal.Body>
            </Modal>
    );
}