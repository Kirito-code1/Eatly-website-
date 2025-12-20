import React from 'react'
import DishesCard from '../mainPage/DishesCard'
import '../css/blocks/dishesPart.css'
import '../css/block/SecondDishesCard.css'


export default function SecondDishesCard() {
	return (
		<div className='container'>
			<div className='dishesPart'>
				<h1 className='header-text'>
					<h1>
						Our Top <span>Dishes</span>
					</h1>
					<p className='viewBtn'>View All →</p>
				</h1>
				<div className='DishesCards'>
					<DishesCard />
					<DishesCard />
					<DishesCard />
					<DishesCard />
					<DishesCard />
				</div>
			</div>
		</div>
	)
}
