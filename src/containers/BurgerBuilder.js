import React, { Component } from 'react';
import Burger from '../components/burger/burger';
import BuildControls from '../components/buildControl/BuildControls';
import Modal from "../components/Layout/Modal";
import OrderSummary from '../components/orderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    cheese: 0.7,
    salad: 0.4,
    meat: 1.6,
    bacon: 1.1
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        isPurchasable: false,
        purchasing: false,
    }

    addIngredientHandler = type => {
        const updatedIngredients = { ...this.state.ingredients };
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICE[type];
        updatedIngredients[type] = oldCount + 1;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, isPurchasable: true });
    }

    removeIngredientHandler = type => {
        const updatedIngredients = { ...this.state.ingredients };
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;
        if (oldCount > 0) {
            const newPrice = oldPrice - INGREDIENT_PRICE[type];
            updatedIngredients[type] = oldCount - 1;
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

            if (newPrice <= 4) this.setState({ isPurchasable: false });
        }


    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    cancelpurchaseHandler = () => {
        this.setState({ purchasing: false })
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.cancelpurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <p style={{ margin: '20px', textAlign: 'center' }}>Total Price: <strong>{(this.state.totalPrice).toFixed(2)}</strong></p>
                <BuildControls
                    less={this.removeIngredientHandler}
                    more={this.addIngredientHandler}
                    disableInfo={this.state.ingredients}
                    isPurchasable={this.state.isPurchasable}
                    ordered={this.purchaseHandler} />
            </React.Fragment >
        );
    }

}

export default BurgerBuilder;