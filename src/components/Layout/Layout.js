import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerToggleHandler = () => {
        this.setState({ showSideDrawer: !this.state.showSideDrawer });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
                <SideDrawer
                    visible={this.state.showSideDrawer}
                    backdropClicked={this.sideDrawerToggleHandler} />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment >
        );
    }

}

export default Layout;