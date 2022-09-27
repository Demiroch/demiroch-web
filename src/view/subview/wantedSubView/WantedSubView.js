import React from 'react';
import "./WantedSubView.css";
import WantedImage from "../../../resources/WantedPoster/WANTED_poster_Base.png";
import background from "../../../resources/Backgrounds/BK_WantedPoster.png";
import Followers from "../../../resources/WantedPoster/Followers_Poster.png";
import Contact from "../../../resources/WantedPoster/Contacto_Poster.png";
import $ from "jquery";

export default function WantedSubView(){

    let open = (url) => {
        window.open(url, '_blank').focus();
    }

    let openInstagram = () => {
        open("https://www.instagram.com/demiroch/?hl=es");
    }

    let openTikTok = () => {
        open("https://www.tiktok.com/@demiroch?lang=es");
    }

    let openYoutube = () => {
        open("https://www.youtube.com/channel/UCIHvN-mFrLyzhoZ3iyKU8DQ");
    }

    let onMouseEnter = () => {
        $("#contact-image").css('transform', 'scale(1.2)');
    }

    let onMouseLeave = () => {
        $("#contact-image").css({'transform': '', '':''});
    }

    return (
        <section className="wanted-container" style={{backgroundImage: `url(${background})`}}>
                <div id="contacto-anchor"/>
                <div id="wanted-container" className="black-shadow relative-container">
                    <img id="wanted-image" src={WantedImage} alt="wanted"/>
                    <div id="followers-container" >
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={Followers} className="zoom" alt="followers-image"/>
                    </div>
                    <div id="contact-container">
                        <div className="relative-container">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img id="contact-image" src={Contact} className="zoom" alt="contact-image"/>
                            <div id={"square-instagram"} className="square-wanted clickable zoom" onClick={openInstagram} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
                            <div id={"square-tiktok"} className="square-wanted clickable zoom" onClick={openTikTok} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
                            <div id={"square-youtube"} className="square-wanted clickable zoom" onClick={openYoutube} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
                        </div>
                    </div>
                </div>
        </section>
    )
}