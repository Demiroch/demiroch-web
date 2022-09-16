import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Iframe from "../IFrame/IFrame";
import './VideoModal.css';

export default function VideoModal({show, setShow, videoUrl, _title}) {

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
                {/*<Modal.Header closeButton >*/}
                {/*    <Modal.Title centered id="contained-modal-title-vcenter" className="modal-header-custom">*/}
                {/*        {title}*/}
                {/*    </Modal.Title>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    <Iframe src={videoUrl} id="" className="" title="" />
                </Modal.Body>
            </Modal>
    );
}