import React from 'react'
import '../css/blocks/rest_page.css'
import RestaurantCard from './RestaurantsCard'
import '../css/blocks/dishesPart.css'
import DishesCard from './DishesCard'
import NoteCard from './NoteCard'
import ControlPartDashBoard from './ControlPartDashBoard'


export default function RestPage() {
	const dishesData = [
		{
			yellowTextDishes: 'Trending',
			nameDishes: 'Swe Dish',
			timeTextDishes: 12,
			costDishes: 999.999,
		},
	]

	return (
		<>
			<div className='container'>
				<div className='restaurantsPart'>
					<h1 className='header-text'>
						Our Top <span>Restaurants</span>
					</h1>
					<div className='cards '>
						<RestaurantCard />
						<RestaurantCard />
						<RestaurantCard />
					</div>
					<p className='viewBtn'>View All →</p>
				</div>
				<div className='dishesPart'>
					<h1 className='header-text'>
						Our Top <span>Dishes</span>
					</h1>
					<div className='DishesCards'>
						<DishesCard />
						<DishesCard />
						<DishesCard />
						<DishesCard />
						<DishesCard />
					</div>
					<div className='bottom-side-view'>
						<p className='viewBtn'>View All →</p>
					</div>
				</div>
				<ControlPartDashBoard />
			</div>
		</>
	)
}
