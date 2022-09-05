import React from 'react';
import "./LicencesSubView.css";
import ImageSlider from "../../../component/ImageSlider/ImageSlider";
import BackgroundImage from "../../../resources/Backgrounds/Inicio_BK.png"
import Logo from "../../../resources/Logo/Logo_Demiroch.png";

export default function LicencesSubView(){
    return (
        <div className="licences-container" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div>
                <img src={Logo} id="demiroch-logo" alt="logo-demiroch"/>
                <p id="logo-description">WANTED FOR IDENTITY THEFT</p>
            </div>
            <ImageSlider></ImageSlider>
        </div>
    )
}