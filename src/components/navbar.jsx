import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">Navbar
                    <span className="btn btn-secondary">{totalCounters}</span>
                </a>
            </nav>
        </React.Fragment>
    )
}


export default NavBar;