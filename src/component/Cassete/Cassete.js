import React from "react";
import "./Cassete.css";
import ButtonPlay from "../../resources/Demos_Cassettes/Buttons_PLAY_ON.png";
import ButtonStop from "../../resources/Demos_Cassettes/Buttons_STOP_ON.png";
import ButtonReplay from "../../resources/Demos_Cassettes/Buttons_REPLAY_ON.png";
export default function Cassete({id, src, className}){
    return (
        <section id={id} className={"relative-container " + className}>
            <figure className="cassete-img-container">
                {/*<div className="square"/>*/}
                <img src={src} alt="cassete-img" />
            </figure>
            <figure className="cassete-button-container">
                <img src={ButtonPlay} alt="button-play" className="cassete-button"/>
            </figure>
            <figure className="cassete-button-container">
                <img src={ButtonStop} alt="button-play" className="cassete-button"/>
            </figure>
            <figure className="cassete-button-container">
                <img src={ButtonReplay} alt="button-play" className="cassete-button"/>
            </figure>
        </section>)
}