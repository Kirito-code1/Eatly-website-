import React from "react";
import '../css/block/footer_page.css'
import Footer from "./individualFooter";
import Promo from "./Promo";

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

