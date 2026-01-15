import React from 'react'
import '../css/blocks/main_page.css'

export default function MainPage({ onRegisterClick }) {
	return (
		<div className='container'>
			<section className='main-page'>

				<section className='content-main'>
					<div className='left-side-content' data-aos='fade-right'>
						<p className='over-text'>─────── OVER 1000 USERS</p>

						<p className='header-enjoy-text'>
							Enjoy Foods <span className='none'>All</span> <br />
							Over <span className='none'>The</span> <span>World</span>
						</p>

						<p className='eatly-text'>
							EatLy help you set saving goals, earn cash back offers, Go to
							disclaimer for more details and get paychecks up to two days
							early. Get <span>a $20 bonus.</span>
						</p>

						<div className='buttons-main'>
							<button className='getBtn' onClick={onRegisterClick}>
								Get Started
							</button>
							<button className='goBtn'>Go Pro</button>
						</div>

						<div className='rate-main'>
							<img src='/images/trustpilot-1 1.svg' alt='' />
							<div className='stars-img'>
								<img src='/images/Icon.svg' alt='' />
								<img src='/images/Icon.svg' alt='' />
								<img src='/images/Icon.svg' alt='' />
								<img src='/images/Icon.svg' alt='' />
								<img src='/images/Icon.svg' alt='' />
							</div>
							<p>4900+</p>
						</div>
					</div>

					<div className='right-side-content' data-aos='fade-left'>
						<img src='/images/Hero.svg' alt='' />
					</div>
				</section>
			</section>
		</div>
	)
}
