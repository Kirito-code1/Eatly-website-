import React from "react";
import '../css/blocks/messagePart.css'



export default function MessagesCard(){
    return(
        <div className="message">
                    <div className="top-side-card-message">
                        <img src="./public/Personnel image 4483.jpg" alt="" />
                        <p>Alexandr R.</p>
                    </div>
                    <div className="bottom-side-card-bottom">
                        <p className="info-text">
                            “ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”
                        </p>
                        <div className="rate-part">
                            <img src="./public/Icon.svg" alt="" />
                        <img src="./public/Icon.svg" alt="" />
                        <img src="./public/Icon.svg" alt="" />
                        <img src="./public/Icon.svg" alt="" />
                        <img src="./public/Icon.svg" alt="" />
                        </div>
                    </div>
                </div>
    )   
}