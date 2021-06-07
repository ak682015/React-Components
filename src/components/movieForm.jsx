import React, {Component} from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import {saveMovie} from "../services/fakeMovieService.js";
import {Redirect} from 'react-router-dom';

class MovieForm extends Form {
    state = {
        data: {title: '', genre: '', number_in_stock: '', rate:''},
        errors: {}
    };
    schema = {
        title: Joi.string().required().label("title"),
        genre: Joi.string().required().label("genre"),
        number_in_stock: Joi.string().required().label("number_in_stock"),
        rate: Joi.string().required().label("rate"),

    };
    doSubmit = () => {
        //Call the server
        const {title, genre, number_in_stock, rate} = this.state.data;
        const movie = {
            name: title,
            genre: genre,
            numberInStock: number_in_stock,
            dailyRentalRate: rate,
        }
        saveMovie(movie);
        this.setState({movie: movie});
        console.log(this.state.data);
        this.props.history.push('/movies');

    }

    render () {
        return (
            <React.Fragment>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderInput("genre", "Genre")}
                    {this.renderInput("number_in_stock", "Number in Stock")}
                    {this.renderInput("rate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </React.Fragment>
        )
    }
}

export default MovieForm;