import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div className="main-nav">
                    <nav className="nav">
                    <div className="left-side-nav">
                        <div className="left-side-inner-nav">
                            <Link to = {'/'}><img src="./public/Logo (1).svg" alt="" /></Link>
                        </div>
                        <div className= {`right-side-inner-nav ${isMenuOpen ? "active" : ""}`}>
                            <Link to = {'/menu'}>Menu</Link>
                            <a>Blog</a>
                            <a>Pricing</a>
                            <a>Contact</a>
                        </div>
                    </div>
                    <img src="./public/menu (1).svg" alt="" className="menuBtn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <div className="right-side-nav">
                        
                        <a href="#" className="logBtn">Login</a>
                        <a href="#" className="signBtn">Sign Up</a>
                    </div>
                </nav>
                </div>
    )
}