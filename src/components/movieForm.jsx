import React, {Component} from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import {saveMovie, getMovie} from "../services/fakeMovieService.js";
import {getGenres} from "../services/fakeGenreService.js";
import {Redirect} from 'react-router-dom';

class MovieForm extends Form {
    state = {
        data: {title: '', genre: '', number_in_stock: '', rate:''},
        genres : [],
        errors: {}
    };
    schema = {
        title: Joi.string().required().label("title"),
        genre: Joi.string().required().label("genre"),
        number_in_stock: Joi.string().required().min(0).max(100).label("number_in_stock"),
        rate: Joi.string().required().min(0).max(10).label("rate"),

    };

    componentDidMount () {
        const genre = getGenres();
        this.setState({genre: genre})

        const movieId = this.props.match.params.id;
        if(movieId === "new") return;

        const movie = getMovie(movieId);
        if(!movie) return this.props.history.replace('/not-found');

        this.setState({data: this.mapToViewModel(movie)})
    }

    mapToViewModel (movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        }
    }

    doSubmit = () => {
        //Call the server
        saveMovie(this.state.data);
        console.log(this.state.data);
        this.props.history.push('/movies');

    }

f
    render () {
        return (
            <React.Fragment>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre",this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </React.Fragment>
        )
    }
}

export default MovieForm;