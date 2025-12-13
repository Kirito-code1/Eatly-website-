import React from "react";
import '../css/block/footer_page.css'

export default function FooterPage() {
	return (
		<>
			<div className='container'>
				<section className='promo'>
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
				<section className='footer'>
					<div className='footer__top'>
						<div className='footer__company'>
							<img src='./public/Logo (1).svg' alt='company' />
						</div>
						<div className='footer__nav'>
							<a href='#'>Menu</a>
							<a href='#'>Blog</a>
							<a href='#'>Pricing</a>
							<a href='#'>Contact</a>
						</div>
					</div>
					<div className='footer__down'>
						<div className='footer_license'>
							<p>© 2023 EATLY All Rights Reserved.</p>
						</div>
						<div className='footer_logos'>
							<img src='./public/Insta.svg' alt='Insta' />
							<img src='./public/in.svg' alt='in' />
							<img src='./public/FaceBook.svg' alt='FaceBook' />
							<img src='./public/Twitter.svg' alt='' />
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

