import React from 'react';
import NavigationItems from './NavigationItems';
import Logo from '../Layout/logo';
import Backdrop from '../Layout/Backdrop';

const sideDrawer = (props) => {

    let attatchedClasses = 'SideDrawer Close';

    if (props.visible) {
        attatchedClasses = 'SideDrawer Open'
    }

    return (
        <React.Fragment>
            <Backdrop displayBackdrop={props.visible} clicked={props.backdropClicked} />
            <div className={attatchedClasses}>
                <Logo height="11%" />
                <NavigationItems />
            </div>
        </React.Fragment>

    )
}

export default sideDrawer;