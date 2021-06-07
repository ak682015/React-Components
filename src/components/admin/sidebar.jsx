import React, { Component } from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/admin/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/admin/users">Users</Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Sidebar;