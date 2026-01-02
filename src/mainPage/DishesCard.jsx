import React from "react";
import '../css/blocks/dishesCard.css';

export default function DishesCard({ dish }) {
    // корректный вывод цены
    const priceInteger = Math.floor(dish.price);
    const priceDecimal = dish.price
        .toFixed(2)
        .split('.')[1];

    return (
        <div className="dishesCard">
            <div className="top-side-card-dishes">
                <img src="/Food Image.png" alt={dish.name} />
            </div>

            <div className="bottom-side-card-dishes">
                <p className="yellowTextDishes">Popular</p>

                <p className="nameDishes">{dish.name}</p>

                <p className="timeTextDishes">
                    {dish.delivery_time} min
                </p>

                <div className="inner-bottom-side-dishes">
                    <p className="costDishes">
                        $ {priceInteger}
                        <span>.{priceDecimal}</span>
                    </p>

                    <button className="addBtn">+</button>
                </div>
            </div>
        </div>
    )
}
