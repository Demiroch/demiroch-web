import React from 'react';
import "./landingView.css";
import LicencesSubView from "../subview/licencesSubView/LicencesSubView";
import MapSubView from "../subview/mapSubView/MapSubView";
import CassetteSubView from "../subview/cassetteSubView/CassetteSubView";
import WantedSubView from "../subview/wantedSubView/WantedSubView";
import ClientsSubView from "../subview/clientsSubView/ClientsSubView";
import background from "../../resources/Backgrounds/BK_Corcho.png";
import NavBar from "../../component/navbar/NavBar";
export default function LandingView(){
    return (
        <div id="landing-view">
                <NavBar/>
                <LicencesSubView/>
                <div id="map-client-container" style={{backgroundImage: `url(${background})`}}>
                    <MapSubView/>
                    <ClientsSubView/>
                </div>
                <CassetteSubView/>s
                <WantedSubView/>
        </div>)
}