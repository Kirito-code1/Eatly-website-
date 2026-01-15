import React from "react";

export default function Footer(){
    return(
        <div className="footer-wrapper">
			<section className='footer'>
					<div className='footer__top'>
						<div className='footer__company'>
							<img src={new URL("/Logo (1).svg", import.meta.url).href} alt='company' />
						</div>

						{/* соцсети для мобилки */}
						<div className='footer_logos footer_logos--mobile'>
							<img src={new URL("/Insta.svg", import.meta.url).href} alt='Insta' />
							<img src={new URL("/in.svg", import.meta.url).href} alt='in' />
							<img src={new URL("/FaceBook.svg", import.meta.url).href} alt='FaceBook' />
							<img src={new URL("/Twitter.svg", import.meta.url).href} alt='Twitter' />
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

						{/* соцсети для десктопа */}
						<div className='footer_logos footer_logos--desktop'>
							<img src={new URL("/Insta.svg", import.meta.url).href} alt='Insta' />
							<img src={new URL("/in.svg", import.meta.url).href} alt='in' />
							<img src={new URL("/FaceBook.svg", import.meta.url).href} alt='FaceBook' />
							<img src={new URL("/Twitter.svg", import.meta.url).href} alt='Twitter' />
						</div>
					</div>
				</section>
		</div>
    )
}