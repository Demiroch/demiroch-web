import React from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Iframe from "../iFrame/IFrame";
import './VideoModal.css';
import {MdCloseFullscreen} from "react-icons/md";

export default function VideoModal({show, setShow, videoUrl, _title, isMobile}) {

    // function getCloseHeader() {
    //     if (isMobile) {
    //         return <Modal.Header closeButton/>
    //     }
    // }

    const onClose = () => {
        setShow(false);
    }

    return (
            <Modal
                size="xl"
                show={show}
                onHide={() => setShow(false)}
                scrollable={false}
                fullscreen="md-down"
                dialogClassName="custom-modal"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                {/*{getCloseHeader()}*/}
                <Modal.Body>
                    <div className="prueba">
                        <MdCloseFullscreen color={'white'} size={'100%'} onClick={onClose}/>
                    </div>
                    <Iframe src={videoUrl} id="" className="" title="" />
                </Modal.Body>
            </Modal>
    );
}