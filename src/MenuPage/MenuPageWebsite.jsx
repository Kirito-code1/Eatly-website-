import { Link } from "react-router-dom";
import SecondDishesCard from "./SecondDishesCard";
import Questions from "./questions";
import Footer from '../mainPage/individualFooter'
import MenuPageTopSide from './MenuPageTopSide'
import '../css/blocks/main_page.css'


export default function MenuPageWebsite(){
    return (
			<>
			  <MenuPageTopSide/>
				<SecondDishesCard />
				<Questions/>
				<Footer />
			</>
		)
}