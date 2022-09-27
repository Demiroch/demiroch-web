import React, {useState} from "react";
import "./Cassete.css";
import ButtonPlay from "../../resources/Demos_Cassettes/Buttons_PLAY_ON.png";
import ButtonStop from "../../resources/Demos_Cassettes/Buttons_STOP_ON.png";
import ButtonReplay from "../../resources/Demos_Cassettes/Buttons_REPLAY_ON.png";
import $ from "jquery";

export default function Cassete({id, src, className, audio}){
    const [isPlaying, setIsPlaying] = useState(false);
    const [isInsidePlay, setIsInsidePlay] = useState(false);

    let onHoverPlayIn = () => {
        setIsInsidePlay(true);
        if (!isPlaying) {
            $("#button-play-" + id).show();
        }
    }

    let onHoverPlayOut = () => {
        setIsInsidePlay(false);
        if (!isPlaying) {
            $("#button-play-" + id).hide();
        }
    }

    let onHoverStopIn = () => {
        $("#button-stop-" + id).show();
    }

    let onHoverStopOut = () => {
        $("#button-stop-" + id).hide();
    }

    let onHoverReplayIn = () => {
        $("#button-replay-" + id).show();
    }

    let onHoverReplayOut = () => {
        $("#button-replay-" + id).hide();
    }

    let onPlay = () => {
        if (!isInsidePlay){
            $("#button-play-" + id).toggle();
        }
        if (!isPlaying) {
            setIsPlaying(!isPlaying);
            audio.play();
            audio.volume = 0.5;
        }
    }

    let onStop = () => {
        audio.pause();
        $("#button-play-" + id).hide();
        setIsPlaying(false);
    }

    let onReplay = () => {
        audio.load();
        audio.play();
        audio.volume = 0.5;
        $("#button-play-" + id).show();
        setIsPlaying(true);
    }

    return (
        <section id={id} className={"black-shadow relative-container " + className}>
            <figure className="cassete-img-container">
                <img src={src} alt="cassete-img" />
            </figure>
            <figure className="cassete-button-container">
                <div id={"square-play-" + id} className="square-play square-cassete" onClick={onPlay} onMouseEnter={onHoverPlayIn} onMouseLeave={onHoverPlayOut}/>
                <img id={"button-play-" + id} src={ButtonPlay} alt="button-play" className="cassete-button"/>
            </figure>
            <figure className="cassete-button-container">
                <div id={"square-stop-" + id} className="square-stop square-cassete" onClick={onStop} onMouseEnter={onHoverStopIn} onMouseLeave={onHoverStopOut}/>
                <img id={"button-stop-" + id} src={ButtonStop} alt="button-stop" className="cassete-button"/>
            </figure>
            <figure className="cassete-button-container">
                <div id={"square-replay-" + id} className="square-replay square-cassete" onClick={onReplay} onMouseEnter={onHoverReplayIn} onMouseLeave={onHoverReplayOut}/>
                <img id={"button-replay-" + id} src={ButtonReplay} alt="button-play" className="cassete-button"/>
            </figure>
        </section>)
}