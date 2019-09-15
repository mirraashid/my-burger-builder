import React from 'react';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(
        igKey => { return <li key={igKey}><span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{igKey}</span>: {props.ingredients[igKey]}</li> }
    )

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
            <h3>Total Price: {(props.totalPrice).toFixed(2)} </h3>
            <button>Cancel</button>
            <button>Continue</button>
        </React.Fragment>

    );
}

export default orderSummary;