import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import React, {Fragment, useEffect, useState} from "react";
import $ from "jquery";
import {FaTiktok, FaInstagram, FaYoutube} from "react-icons/fa";
import TikTokLogo from "../../resources/Mobile/Iconos/Tiktok.png";
import InstagramLogo from "../../resources/Mobile/Iconos/Instagram.png";
import MailLogo from "../../resources/Mobile/Iconos/mail.png";
import DemiRochLogo from "../../resources/Logo/Logo_Demiroch_Blanco.png";
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


    const [portfolioClass, setPortfolioClass] = useState("");
    const [demosClass, setDemosClass] = useState("");
    const [contactClass, setContactClass] = useState("");

    useEffect(() => {
        document.addEventListener('scroll', (event) => {
            let actY = window.scrollY;
            let mapY = document.getElementById("map-anchor").getBoundingClientRect().top + window.scrollY - 100;
            let casseteY = document.getElementById("cassete-anchor").getBoundingClientRect().top + window.scrollY - 200;
            let wantedY = document.getElementById("contacto-anchor").getBoundingClientRect().top + window.scrollY - 400;
            if (actY < mapY) {
                setPortfolioClass("")
                setDemosClass("")
                setContactClass("")
            }else if (actY > mapY && actY < casseteY) {
                setPortfolioClass("yellow-color")
                setDemosClass("")
                setContactClass("")
            } else if (actY > casseteY && actY < wantedY) {
                setPortfolioClass("")
                setDemosClass("yellow-color")
                setContactClass("")
            } else if (actY > wantedY) {
                setPortfolioClass("")
                setDemosClass("")
                setContactClass("yellow-color")
            }
        });
    }, [])

    let bg = isMobile? "transparent" : "dark";
    let iconSize = isMobile? "40px" : "25px";
    let variant = isMobile? "white" : "dark";

    const getMediaButtons = () => {
        return <Fragment>
            <Nav.Item className="navbar-icon margin-left-icons">
                <Nav.Link target="_blank" id="instagram-icon"  href="https://www.tiktok.com/@demiroch?lang=es">
                    <img src={TikTokLogo} alt="tiktok-logo"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navbar-icon">
                <Nav.Link target="_blank"  href="https://www.instagram.com/demiroch/?hl=es">
                    <img src={InstagramLogo} alt="instagram-logo"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navbar-icon mail-icon">
                <Nav.Link target="_blank"  href="mailto: andyjalife@gmail.com">
                    <img src={MailLogo} alt="mail-logo"/>
                </Nav.Link>
            </Nav.Item>
        </Fragment>
    }

    const getMediaButtonsContainer = () => {
        if (!isMobile) {
            return getMediaButtons();
        }
        return <div id="icon-link-container">
                    {getMediaButtons()}
                </div>
    }


    return (
        <Navbar bg={bg} variant={variant} expand="lg" fixed={"top"} className="black-shadow">
            <Container>
                <Navbar.Brand href="#home-anchor">
                    <img id="logo-menu-dr" src={DemiRochLogo} alt='logo-menu'/>
                </Navbar.Brand>
                <Navbar.Toggle onClick={clickToggle} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="align-right">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link href="#map-anchor" className={portfolioClass} >Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#cassete-anchor" className={demosClass}>Demos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contacto-anchor" className={contactClass}>Contact</Nav.Link>
                        </Nav.Item>
                        {getMediaButtonsContainer()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
