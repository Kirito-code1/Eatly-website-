import React from "react";
import './css/blocks/main_page.css';

export default function MainPage(){

    return(
        <>
        <div className="container">
            <section className="main-page">
                <div className="main-nav">
                    <nav className="nav">
                    <div className="left-side-nav">
                        <div className="left-side-inner-nav">
                            <img src="./public/Logo (1).svg" alt="" />
                        </div>
                        <div className="right-side-inner-nav">
                            <a href="#">Menu</a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="right-side-nav">
                        <a href="#" className="logBtn">Login</a>
                        <a href="#" className="signBtn">Sign Up</a>
                    </div>
                </nav>
                </div>
                <section className="content-main">
                    <div className="left-side-content">
                        <p className="over-text">─────── OVER 1000 USERS</p>
                        <p className="header-enjoy-text">
                            Enjoy Foods All <br/> Over The <span>World</span>
                        </p>
                        <p className="eatly-text">
                            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get <span>a $20 bonus.</span>
                        </p>
                        <div className="buttons-main">
                            <button className="getBtn">Get Started</button>
                            <button className="goBtn">Go Pro</button>
                        </div>
                        <div className="rate-main">
                            <img className="img-main" src="./public/trustpilot-1 1.svg" alt="" />
                            <div className="stars-img">
                                <img src="./public/Icon.svg" alt="" />
                            <img src="./public/Icon.svg" alt="" />
                            <img src="./public/Icon.svg" alt="" />
                            <img src="./public/Icon.svg" alt="" />
                            <img src="./public/Icon.svg" alt="" />
                            </div>
                            <p>4900+</p>
                        </div>
                    </div>
                    <div className="right-side-content">
                        <img src="./public/Hero.svg" alt="" />
                    </div>
                </section>
            </section>
        </div>
        </>
    );
}
