import React, {useState} from "react";
import "./Cassete.css";
import ButtonPlay from "../../resources/Demos_Cassettes/Buttons_PLAY_ON.png";
import ButtonStop from "../../resources/Demos_Cassettes/Buttons_STOP_ON.png";
import ButtonReplay from "../../resources/Demos_Cassettes/Buttons_REPLAY_ON.png";
import $ from "jquery";

export default function Cassete({id, src, className, audio, isMobile}){
    const [isPlaying, setIsPlaying] = useState(false);

    let onHoverPlayIn = () => {
        if (!isMobile) {
            if (!isPlaying) {
                $("#button-play-" + id).show();
            }
        }
    }

    let onHoverPlayOut = () => {
        if (!isMobile) {
            if (!isPlaying) {
                $("#button-play-" + id).hide();
            }
        }
    }

    let onHoverStopIn = () => {
        if (!isMobile) {
            $("#button-stop-" + id).show();
        }
    }

    let onHoverStopOut = () => {
        if (!isMobile) {
            $("#button-stop-" + id).hide();
        }
    }

    let onHoverReplayIn = () => {
        if (!isMobile) {
            $("#button-replay-" + id).show();
        }
    }

    let onHoverReplayOut = () => {
        if (!isMobile) {
            $("#button-replay-" + id).hide();
        }
    }

    let onPlay = () => {
        if (isMobile) {
            audio = $("#" + id + '-audio')[0]
        }
        audio.play();
        audio.volume = 0.5;
        $(".button-play-" + id).show();
        setIsPlaying(true);
    }

    let onStop = () => {
        if (isMobile) {
            audio = $("#" + id + '-audio')[0]
        }
        audio.pause();
        if (isMobile) {
            $(".button-stop-" + id).show();
            setTimeout(() => {$(".button-stop-" + id).hide();}, 150)
        }
        $(".button-play-" + id).hide();
        setIsPlaying(false);
    }

    let onReplay = () => {
        if (isMobile) {
            audio = $("#" + id + '-audio')[0]
        }
        audio.load();
        audio.play();
        audio.volume = 0.5;
        if (isMobile) {
            $(".button-replay-" + id).show();
            setTimeout(() => {$(".button-replay-" + id).hide();}, 150)
        }
        $(".button-play-" + id).show();
        setIsPlaying(true);
    }

    const sectionClassName = isMobile ? "" : " black-shadow ";

    return (
        <section id={id} className={"relative-container " + className + sectionClassName}>
            <figure className="cassete-img-container">
                <img src={src} alt="cassete-img" />
            </figure>
            <figure className="cassete-button-container">
                <div id={"square-play-" + id} className="square-play square-cassete" onClick={onPlay} onMouseEnter={isMobile ? null : onHoverPlayIn} onMouseLeave={isMobile ? null : onHoverPlayOut}/>
                <img id={"button-play-" + id} src={ButtonPlay} alt="button-play" className={"cassete-button button-play-" + id}/>
            </figure>
            <figure className="cassete-button-container">
                <div id={"square-stop-" + id} className="square-stop square-cassete" onClick={onStop} onMouseEnter={isMobile ? null : onHoverStopIn} onMouseLeave={isMobile ? null : onHoverStopOut}/>
                <img id={"button-stop-" + id} src={ButtonStop} alt="button-stop" className={"cassete-button button-stop-" + id}/>
            </figure>
            <figure className="cassete-button-container">
                <div id={"square-replay-" + id} className="square-replay square-cassete" onClick={onReplay} onMouseEnter={isMobile ? null : onHoverReplayIn} onMouseLeave={isMobile ? null : onHoverReplayOut}/>
                <img id={"button-replay-" + id} src={ButtonReplay} alt="button-play" className={"cassete-button button-replay-" + id}/>
            </figure>
        </section>)
}