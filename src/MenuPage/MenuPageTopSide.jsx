import Navbar from "../mainPage/Navbar.jsx"
import '../css/blocks/topSideSite.css'
import FoodCategory from "./FoodCategory.jsx"
import React from "react"
import RestaurantCard from "../mainPage/RestaurantsCard.jsx"
export default function MenuPageTopSide(){
    return(
        <div className="container">
            <Navbar/>
            <section className="topSide">
                <div className="left-side">
                    <div className="block-procent">
                        <p className="procentText">50% OFF</p>
                        <p className="textWeekend">WEEKEND</p>
                        <img
                            src='/images/Food Image (2).png'
                            alt=""
                            className="imgPosition"
                        />
                    </div>
                    <div className="block-search">
                        <input type="text" placeholder="Search" />
                        <div className="buttons-block">
                            <button className="noActive foodBtn">Food</button>
                        <button className="active resturentBtn">Resturent</button>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="block-category">
                        <p className="categoryText">Category</p>
                        <div className="food-category">
<FoodCategory/>
<FoodCategory/>
<FoodCategory/>
<FoodCategory/>
                        </div>
                        <div className="sort">
                        <p className="categoryText">Sort By</p>
                        <p className="gray-text">Recomended</p>
                        <p className="gray-text">Most Popular</p>
                        </div>
                        <div className="price">
                        <p className="categoryText">Price</p>
                        <div className="radio-input">
                            <input type="range" min="0" max="100"  class="range" />
                            <div className="spans">
                                <span>$0</span>
                                <span>$25</span>
                                <span>$50</span>
                                <span>$100</span>
                                <span>$500</span>
                                <span>$1000</span>
                            </div>
                        </div>
                        </div>
                        <div className="buttonApp">
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </section>
           <div className="restaurantsPart">
            <h1 className="header-text">Our Top <span>Restaurants</span></h1>
            <div className="cards " >
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
            <p className="viewBtn">View All →</p>
        </div>
        </div>
    )
}