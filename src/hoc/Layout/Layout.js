import React, { Component } from 'react'
import Aux from '../Aux/Aux'

import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import './Layout.css'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sideDrawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <Aux>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main className="content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout