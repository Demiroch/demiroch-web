import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
// import {AiFillInstagram} from "react-icons/ai";
import React from "react";

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="black-shadow">
            <Container>
                <Navbar.Brand href="#home-anchor">DEMIROCH</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="align-right">
                    <Nav >
                        <Nav.Link href="#map-anchor">¿Where has he been?</Nav.Link>
                        <Nav.Link href="#cassete-anchor">Demos</Nav.Link>
                        <Nav.Link href="#contacto-anchor">Contact</Nav.Link>

                        {/*<Nav.Link href="#contacto-anchor">*/}
                        {/*    <AiFillInstagram color="white" size="20%"/>*/}
                        {/*</Nav.Link>*/}
                        {/*<Nav.Item>*/}
                        {/**/}
                        {/*</Nav.Item>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
