import React from 'react'
import DishesCard from '../mainPage/DishesCard'
import '../css/blocks/dishesPart.css'
import { useState, useEffect } from 'react';


export default function SecondDishesCard() {
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
