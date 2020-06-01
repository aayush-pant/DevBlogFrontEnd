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
                <div className="toolbar_logo"><a href="/">LENS<span style={{ color: "#e21717" }}>&</span>WORDS</a></div>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/thoughts">Thoughts</a></li>
                        {/* <li><a href="/add-blog">Add Blog</a></li> */}
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar;