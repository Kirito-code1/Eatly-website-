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
import Footer from "../mainPage/individualFooter";
import MenuPageTopSide from "./MenuPageTopSide";
import '../css/blocks/main_page.css'

export default function MenuPageWebsite(){
    return(
        <>
        <MenuPageTopSide/>
        </>
    )
}