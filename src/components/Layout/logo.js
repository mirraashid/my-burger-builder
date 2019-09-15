import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className="Logo" style={{ height: props.height }}>
            <img src={BurgerLogo} alt="BurgerLogo" />
        </div>
    );
}

export default logo;