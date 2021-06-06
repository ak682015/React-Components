import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/products"> Products</Link>
                </li>
                <li>
                    <Link to="/posts"> Posts</Link>
                </li>
                <li>
                    <Link to="/dashboard"> Admin</Link>
                </li>

            </ul>
        </React.Fragment>
    )
}


export default NavBar;