import React, {useEffect, useState} from 'react'
import '../css/blocks/rest_page.css'
import RestaurantCard from './RestaurantsCard.jsx'
import '../css/blocks/dishesPart.css'
import DishesCard from './DishesCard.jsx'
import NoteCard from './NoteCard.jsx'
import ControlPartDashBoard from './ControlPartDashBoard.jsx'


export default function RestPage() {
	const [dishes, setDishes] = useState([]);
	useEffect(() => {
		// 🔴 СТАРОЕ (неправильное):
		// fetch("https://eatly-website-production.up.railway.app/dishes")

		// 🟢 НОВОЕ (правильное):
		fetch("https://ealy-backend-production.up.railway.app/dishes")
			.then(res => res.json())
			.then(data => {
				console.log("DATA FROM BACKEND:", data)

				// Твой бэкенд возвращает {success, count, dishes}
				// Нужно брать data.dishes, а не data
				if (data.success && data.dishes) {
					let onlyTen = data.dishes.slice(0, 20) // берём dishes из data
					setDishes(onlyTen)
				} else {
					console.error("Unexpected data format:", data)
				}
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
