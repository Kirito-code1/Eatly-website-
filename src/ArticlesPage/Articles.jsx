import Navbar from "../mainPage/Navbar.jsx";
import Promo from "../mainPage/Promo.jsx";
import '../css/blocks/articles-section.css';
import Article from "./Article.jsx";
import Questions from "../MenuPage/Questions.jsx";
import Footer from "../mainPage/individualFooter.jsx";
import { Link } from "react-router-dom";
export default function ArticlesPage() {
    return(
        <div className="container">
            <Navbar/>
            <Promo/>
            <section className="articles-section">
                <h1 className='header-text'>
						Latest <span>Articles</span>
					</h1>
                    <div className="cards-articles">
                        <Link to = '/article'>
                        <Article/>
                        </Link>
                        <Article/>
                        <Article/>
                        <Article/>
                        <Article/>
                        <Article/>
                    </div>
            </section>
            <Questions/>
            <Footer/>
        </div>
    )
}