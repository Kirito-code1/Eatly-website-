import React from "react";
import '../css/blocks/restaurantsCard.css';

export default function RestaurantCard(){


    return(
        <div className="card" >
                    <div className="top-side-card">
                        
                    </div>
                    <div className="bottom-side-card">
                        <p className="tip">
                            Healthy
                        </p>
                        <p className="nameMeal">The Chicken King</p>
                        <div className="inner-bottom-side-card">
                            <p className="timeText">
                                24 min • <img src='/images/Icon.svg' alt="" /> <span>4.8</span>
                            </p>
                            <button className="addFav">
                                <img src='/images/Book Mark.svg' alt=""/>
                            </button>
                        </div>
                    </div>
            </div>
    )
}