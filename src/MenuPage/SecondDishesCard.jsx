import React from 'react'
import DishesCard from '../mainPage/DishesCard.jsx'
import '../css/blocks/dishesPart.css'
import { useState, useEffect } from 'react';


export default function SecondDishesCard() {
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
					let onlyTen = data.dishes.slice(0, 5) // берём dishes из data
					setDishes(onlyTen)
				} else {
					console.error("Unexpected data format:", data)
				}
			})
			.catch(err => console.error("Ошибка fetch:", err));
	}, []);
	return (
		<div className='container'>
			<div className='dishesPart'>
				<h1 className='header-text'> 
						Our Top <span>Dishes</span>
					
					<p className='viewBtn'>View All →</p>
				</h1>
				<div className='DishesCards'>
					{dishes.map((dish, index) => (
							<DishesCard
								key={index}
								dish={dish}
							/>
						))}
				</div>
			</div>
		</div>
	)
}
