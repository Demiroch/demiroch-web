import React from 'react';
import "./WantedSubView.css";
import WantedImage from "../../../resources/WantedPoster/WANTED_poster.png";
import background from "../../../resources/Backgrounds/BK_WantedPoster.png";

export default function WantedSubView(){
    return (
        <section className="wanted-container" style={{backgroundImage: `url(${background})`}}>
                <div id="contacto-anchor"/>
                <div id="wanted-container" className="black-shadow">
                    <img id="wanted-image" src={WantedImage} alt="wanted"/>
                </div>
        </section>
    )
}