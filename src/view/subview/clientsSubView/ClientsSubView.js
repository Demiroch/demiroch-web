import React from 'react';
// import {Col, Container, Row} from "react-bootstrap";
import "./ClientsSubView.css";
import Clients from "../../../resources/Clientes/Clientes.png";
import Title from "../../../resources/Clientes/clients_title.png";

export default function ClientsSubView(){
    return (
        <div className="clients-container">
            <div id="clients-title-container" className="black-shadow">
                <img src={Title} id="clients-title-img" alt="clients-title"/>
            </div>
            <div id="clients-container" className="black-shadow">
                <img src={Clients} id="clients-img" alt="clients"/>
            </div>
        </div>
    )
}