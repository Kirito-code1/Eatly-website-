import React, {useEffect, useState} from 'react'
import '../css/blocks/rest_page.css'
import RestaurantCard from './RestaurantsCard'
import '../css/blocks/dishesPart.css'
import DishesCard from './DishesCard'
import NoteCard from './NoteCard'
import ControlPartDashBoard from './ControlPartDashBoard'


export default function RestPage() {
	const [dishes, setDishes] = useState([]);
	useEffect(() => {
		fetch("http://127.0.0.1:8000/dishes")
			.then(res => res.json())
			.then(data => {
				console.log("DATA FROM BACKEND:", data)

				let onlyTen = data.slice(0,6)

				setDishes(onlyTen)


			})
			.catch(err => console.error("Ошибка fetch:", err));
	}, []);

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
						{dishes.map((dish, index) => (
							<DishesCard
								key={index}
								dish={dish}
							/>
						))}
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
