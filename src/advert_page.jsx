import { useState } from 'react'
import './css/block/advert_page.css'

export default function AdvertPage() {
	return (
		<>
			<section className='achievements'>
				<div className='arc_right'></div>
				<div className='achievements__item'>
					<h2>10K+</h2>
					<p>
						Satisfied Customers
						<br />
						All Great Over The World
					</p>
				</div>

				<div className='line'></div>

				<div className='achievements__item'>
					<h2>4M</h2>
					<p>
						Healthy Dishes Sold
						<br />
						Including Milk Shakes Smooth
					</p>
				</div>

				<div className='line'></div>

				<div className='achievements__item'>
					<h2>99.99%</h2>
					<p>
						Reliable Customer Support
						<br />
						We Provide Great Experiences
					</p>
				</div>
			</section>
		</>
	)
}
