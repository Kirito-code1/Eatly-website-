import React from "react";
import '../css/blocks/notifications.css'


export default function NoteCard(){

    return(
        <div className="card-note">
                    <p className="time-meal">3:09 PM</p>
                    <div className="img-meal">
                        <img src='/images/Food Image (1).png' alt="" />
                    </div>
                    <div className="info-text">
                        <p className="name-meal">Chicken Hell</p>
                    <p className="process-meal">On The Way</p>
                    </div>
                </div>
    )
}