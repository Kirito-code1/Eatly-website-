import React from "react";
import '../css/blocks/footer_page.css'
import Footer from "./individualFooter.jsx";
import Promo from "./Promo.jsx";

export default function FooterPage() {
	return (
		<>
			<div className='container'>
				<Promo/>
				<Footer/>
			</div>
		</>
	)
}

