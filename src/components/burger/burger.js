import React from 'react';
import BurgerIngredients from './burgerIngredients';

const burger = (props) => {
    const igArray = [];
    for (const igKey in props.ingredients) {
        for (let count = 0; count < props.ingredients[igKey]; count++) {
            igArray.push(igKey);
        }
    }

    let ingredients = igArray.map((igKey, i) => {
        return <BurgerIngredients type={igKey} key={i} />
    }
    );

    if (ingredients.length === 0) ingredients = <p>Please start adding ingredinets</p>;



    return (
        <div className="Burger">

            <BurgerIngredients type="bread-top" />
            {ingredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );

}

export default burger;