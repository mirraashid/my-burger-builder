import React from 'react';
import BurgerLogo from '../Layout/logo';
import NavigationItems from './NavigationItems';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div className="DrawerToggle" onClick={props.toggleSideDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <BurgerLogo height="80%" />
            <nav className="DesktopOnly"><NavigationItems /></nav>
        </header>
    );
}

export default toolbar;