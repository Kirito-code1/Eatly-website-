import React from "react";
import '../css/block/footer_page.css'
import Footer from "./individualFooter";

export default function FooterPage() {
	return (
		<>
			<div className='container'>
				<section className='promo' data-aos = 'fade-up'>
					<div className='promo__content'>
						<h2 className='promo__title'>GET 50%</h2>

						<div className='promo__form'>
							<input
								type='email'
								placeholder='Enter Your Email Address'
								className='promo__input'
							/>
							<button className='promo__btn'>Subscribe</button>
						</div>
					</div>

					<div className='promo__image'>
						<img src='/Food Image.svg' alt='food' />
					</div>
				</section>
				<Footer/>
			</div>
		</>
	)
}

