import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './sidebar';
import Posts from '../posts';


const Dashboard = ({match}) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Sidebar />
            <Route path="/admin/users" component={Posts}/>
            <Route path="/admin/posts" component={Posts}/>

        </div>
    );
};

export default Dashboard;