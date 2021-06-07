import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/movies">
                                Movies
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/customers">
                                Customers
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/rentals">
                                Rentals
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/login">
                                Login
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/register">
                                Register
                            </NavLink>


                        </div>
                    </div>
            </div>
            </nav>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/"> Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/products"> Products</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/posts"> Posts</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/admin"> Admin</Link>*/}
            {/*    </li>*/}

            {/*</ul>*/}
        </React.Fragment>
    )
}


export default NavBar;