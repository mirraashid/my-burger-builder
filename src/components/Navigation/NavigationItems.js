import React from 'react';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Order</NavigationItem>
            <NavigationItem link="/">Summary</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
}

export default navigationItems;