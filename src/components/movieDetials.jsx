import React, { Component } from 'react';
import {saveMovie} from "../services/fakeMovieService.js";

class MovieDetails extends Component {

    state = {
        movie : {
            title : "",
            genre : "",
            numberInStock : "",
            rate : "",
        }
    }
    
    handleSave = () =>{
        this.props.history.replace('/movies');
    }



    render () {

        return(
            <React.Fragment>
                <h1>Movie</h1>
                <h1>{this.props.match.params._id}</h1>
                <button onClick={this.handleSave}>Save</button>

            </React.Fragment>
        )
    }

}

export default MovieDetails;