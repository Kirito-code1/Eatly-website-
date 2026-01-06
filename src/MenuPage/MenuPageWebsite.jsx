import { Link } from "react-router-dom";
import SecondDishesCard from "./SecondDishesCard.jsx";
import Footer from "../mainPage/individualFooter.jsx";
import MenuPageTopSide from "./MenuPageTopSide.jsx";
import Questions from "./Questions.jsx";
import "../css/blocks/main_page.css";

export default function MenuPageWebsite() {
  return (
    <>
      <MenuPageTopSide />
      <SecondDishesCard />
      <Questions />
      <Footer />
    </>
  );
}
