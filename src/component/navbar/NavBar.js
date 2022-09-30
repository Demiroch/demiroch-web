import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import React from "react";
import $ from "jquery";
import {FaTiktok, FaInstagram, FaYoutube} from "react-icons/fa";

export default function NavBar({isMobile}) {
    function clickToggle() {
        if (isMobile) {
            let element = $(".navbar");
            if (element.hasClass("bg-red")) {
                element.removeClass("bg-red");
            } else {
                element.addClass("bg-red")
            }
        }
    }

    let fixed = isMobile? "top" : "";
    let sticky = isMobile? "" : "top";
    let bg = isMobile? "transparent" : "dark";

    return (
        <Navbar bg={bg} variant="dark" expand="lg" fixed={fixed} sticky={sticky} className="black-shadow">
            <Container>
                <Navbar.Brand href="#home-anchor">DEMIROCH</Navbar.Brand>
                <Navbar.Toggle onClick={clickToggle} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="align-right">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link href="#map-anchor">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#cassete-anchor">Demos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contacto-anchor">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link target="_blank" id="instagram-icon" href="https://www.instagram.com/demiroch/?hl=es">
                                <FaInstagram color="white" size="25px"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link target="_blank"  href="https://www.tiktok.com/@demiroch?lang=es">
                                <FaTiktok color="white" size="25px"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link target="_blank"  href="https://www.youtube.com/channel/UCIHvN-mFrLyzhoZ3iyKU8DQ?app=desktop">
                                <FaYoutube color="white" size="25px"/>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
