import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Posts = ({ match }) => {
        return(
            <React.Fragment>
                <div>
                    <h1>Posts</h1>
                    Year: {match.params.year}, Month: {match.params.month}
                </div>

            </React.Fragment>
        )
    }

export default Posts;