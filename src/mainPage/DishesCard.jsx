import React from "react";
import '../css/blocks/dishesCard.css';


export default function DishesCard() {


    return (
        <div className="dishesCard" data-aos = 'fade-bottom'>
                    <div className="top-side-card-dishes">
                        <img src="./public/Food Image.png" alt="" />
                    </div>
                    <div className="bottom-side-card-dishes">
                        <p className="yellowTextDishes">Healthy</p>
                        <p className="nameDishes">Chicken Hell</p>
                        <p className="timeTextDishes">24 min • <img src="./public/Icon.svg" alt="" /> <span>4.8</span></p>
                        <div className="inner-bottom-side-dishes">
                            <p className="costDishes">$12 <span>.99</span></p>
                            <button className="addBtn">+</button>
                        </div>
                    </div>
                </div>
    )
}