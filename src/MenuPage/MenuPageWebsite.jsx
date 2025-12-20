import { Link } from "react-router-dom";
import Footer from '../mainPage/individualFooter'
import SecondDishesCard from "./SecondDishesCard";
import Questions from "./questions";


export default function MenuPageWebsite(){
    return (
			<>
				<SecondDishesCard />
				<Questions/>
				<Footer />
			</>
		)
}