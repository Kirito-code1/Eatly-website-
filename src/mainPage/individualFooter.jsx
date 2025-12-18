import React from "react";

export default function Footer(){
    return(
        <section className='footer'>
					<div className='footer__top'>
						<div className='footer__company'>
							<img src='./public/Logo (1).svg' alt='company' />
						</div>

						{/* соцсети для мобилки */}
						<div className='footer_logos footer_logos--mobile'>
							<img src='./public/Insta.svg' alt='Insta' />
							<img src='./public/in.svg' alt='in' />
							<img src='./public/FaceBook.svg' alt='FaceBook' />
							<img src='./public/Twitter.svg' alt='' />
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
							<img src='./public/Insta.svg' alt='Insta' />
							<img src='./public/in.svg' alt='in' />
							<img src='./public/FaceBook.svg' alt='FaceBook' />
							<img src='./public/Twitter.svg' alt='' />
						</div>
					</div>
				</section>
    )
}