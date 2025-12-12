import React from "react";
import '../css/blocks/rest_page.css'
import RestaurantCard from "./RestaurantsCard";
import '../css/blocks/dishesPart.css'
import DishesCard from "./DishesCard";
import NoteCard from "./NoteCard";


export default function RestPage(){



    return (
        <div className="container">
            <div className="restaurantsPart">
            <h1 className="header-text">Our Top <span>Restaurants</span></h1>
            <div className="cards">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
            <p className="viewBtn">View All →</p>
        </div>
        <div className="dishesPart">
            <h1 className="header-text">Our Top <span>Dishes</span></h1>
            <div className="DishesCards">
                <DishesCard/>
                <DishesCard/>
                <DishesCard/>
                <DishesCard/>
                <DishesCard/>
            </div>
            <div className="bottom-side-view">
                <p className="viewBtn">View All →</p>
            </div>
        </div>
        <div className="controlPartDashBoard">
            <div className="left-side-notifications">
            <h1 className="header-text">Control  <span>Purchases</span> Via Dashboard</h1>
            <div className="notifications-cards">
                <NoteCard/>
                <NoteCard/>
                <NoteCard/>
            </div>
            </div>
            <div className="right-side-dashboard">
                <div className="dashboard">
                    <div className="top-side-dashboard">
                        <p className="text-purchases">Purchases</p>
                        <select name="" id="select">
                            <option value="">This month</option>
                            <option value="">This year</option>
                            <option value="">This week</option>
                        </select>
                    </div>
                    <div className="bottom-side-dashboard">
                        <div className="card-expense">
                                <div className="left-side-dash">
                                    <img src="./public/icon.png" alt="" />
                                <p className="nameCard">Expense</p>
                                </div>
                                <p className="costCard">$409.00</p>
                        </div>
                        <div className="card-expense">
                                <div className="left-side-dash">
                                    <img src="./public/icon (1).png" alt="" />
                                <p className="nameCard">Vocher Usage</p>
                                </div>
                                <p className="costCard">$45.78</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}