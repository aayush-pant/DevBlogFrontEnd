import React from 'react';

import './SideDrawer.css'

const sideDrawer = (props) => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Blog</a></li>
                <li><a href="/thoughts">Thoughts</a></li>
                <li><a href="/add-blog">Add Blog</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer