import React from 'react';
import "./landingView.css";
import LicencesSubView from "../subview/licencesSubView/LicencesSubView";
import MapSubView from "../subview/mapSubView/MapSubView";
import CassetteSubView from "../subview/cassetteSubView/CassetteSubView";
import WantedSubView from "../subview/wantedSubView/WantedSubView";
export default function LandingView(){
    return (
        <div id="landing-view">
                <LicencesSubView/>
                <MapSubView/>
                <CassetteSubView/>
                <WantedSubView/>
        </div>)
}