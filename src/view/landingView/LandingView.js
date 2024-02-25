import React, {useEffect, useState} from 'react';
import "./landingView.css";
import LicencesSubViewWeb from "../subview/licencesSubView/LicencesSubViewWeb";
import MapSubViewWeb from "../subview/mapSubView/MapSubViewWeb";
import CassetteSubViewWeb from "../subview/cassetteSubView/CassetteSubViewWeb";
import WantedSubView from "../subview/wantedSubView/WantedSubView";
import ClientsSubView from "../subview/clientsSubView/ClientsSubView";
import ClientsSubViewMobile from "../subview/clientsSubView/ClientsSubViewMobile";
import backgroundWeb from "../../resources/Backgrounds/BK_Corcho.png";
import backgroundMobile from "../../resources/Mobile/Backgrounds/BK_Corcho_Mobile.png";
import MapSubViewMobile from "../subview/mapSubView/MapSubViewMobile";
import LicencesSubViewMobile from "../subview/licencesSubView/LicencesSubViewMobile";
import CassetteSubViewMobile from "../subview/cassetteSubView/CassetteSubViewMobile";

export default function LandingView(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 1000;

    if (isMobile) {
        return (
            <div id="landing-view">
                {/*<NavBar isMobile={isMobile}/>*/}
                <LicencesSubViewMobile/>
                <div id="map-client-container" style={{backgroundImage: `url(${backgroundMobile})`}}>
                    <MapSubViewMobile/>
                    <ClientsSubViewMobile/>
                </div>
                <CassetteSubViewMobile/>
                <WantedSubView isMobile={isMobile}/>
            </div>)
    } else {
        return (<div id="landing-view">
                {/*<NavBar isMobile={isMobile}/>*/}
                <LicencesSubViewWeb/>
                <div id="map-client-container" style={{backgroundImage: `url(${backgroundWeb})`}}>
                    <MapSubViewWeb/>
                    <ClientsSubView/>
                </div>
                <CassetteSubViewWeb/>
                <WantedSubView isMobile={isMobile}/>
            </div>)
    }
}