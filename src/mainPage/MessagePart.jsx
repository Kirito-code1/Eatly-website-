import React from "react";
import '../css/blocks/rest_page.css'
import '../css/blocks/messagePart.css'
import MessagesCard from "./MessageCard";

export default function MessagePart(){

    return(
        <div className="container">
            <div className="messagePart">
            <h1 className="header-text">Our Top <span>Restaurants</span></h1>
            <div className="messagesCards">
                <MessagesCard/>
                <MessagesCard/>
                <MessagesCard/>
                <MessagesCard/>
            </div>
            </div>
        </div>
    )
}