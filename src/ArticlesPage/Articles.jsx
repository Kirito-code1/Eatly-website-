import Navbar from "../mainPage/Navbar";
import Promo from "../mainPage/Promo";
import '../css/blocks/articles-section.css';
import Article from "./Article";
import Questions from "../MenuPage/Questions";
import Footer from "../mainPage/individualFooter";
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
                        <Article/>
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