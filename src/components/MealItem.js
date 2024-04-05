import React from 'react';

const MealItem = ({ meal }) => {
    return (
        <li className="meal-item">
            <img src={meal.image} alt={meal.name} />
            <article>
                <div className="meal-item-description">
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                </div>
                <div className="meal-item-actions">
                    <p className="meal-item-price">${meal.price}</p>
                    <button className="button">Add to Cart</button>
                </div>
            </article>
        </li>
    );
}

export default MealItem;
