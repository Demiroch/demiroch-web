import React from 'react';
import "./landingView.css";
import LicencesSubView from "../subview/licencesSubView/LicencesSubView";
import MapSubView from "../subview/mapSubView/MapSubView";
import CassetteSubView from "../subview/cassetteSubView/CassetteSubView";
import WantedSubView from "../subview/wantedSubView/WantedSubView";
import misc1 from "../../resources/Misc/FingerPrint_Demian.png";
export default function LandingView(){
    return (
        <div style={{height: '100%'}}>
            <div>
                <img src={misc1} id="fingerprint-damian" alt="huella-dactilar"/>
            </div>
            <LicencesSubView/>
            <MapSubView/>
            <CassetteSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
            <WantedSubView/>
        </div>
    )
}