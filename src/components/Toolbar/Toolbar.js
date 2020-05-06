import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo"><a href="/">LOGO</a></div>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">Blogs</a></li>
                        <li><a href="/">Add Blog</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar;