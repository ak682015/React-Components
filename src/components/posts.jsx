import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';

const Posts = ({ match, location  }) => {
    const result = queryString.parse(location.search);
    console.log(result);
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