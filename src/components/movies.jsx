import React,{Component} from 'react';
import {getMovie, getMovies} from "../services/fakeMovieService.js";
import {getGenres} from "../services/fakeGenreService.js";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate"
import List from "./common/list";
import MoviesTable from "./moviesTable";
import _ from 'lodash';
import {Link} from 'react-router-dom';
import SearchBox from "./common/searchBox";

class Movie extends Component{
    state= {
        movies : [],
        genres: [],
        currentPage : 1,
        pageSize : 4,
        sortColumn: {path:'title', order: 'asc'},
        selectedGenre: null,
        searchQuery: "",
    };

    // handleDelete = movie => {

    // };

    deleteMovie = movieId => {
        const movies = this.state.movies.filter(m => m._id !== movieId);
        this.setState({movies : movies});
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const likedMovieIndex = movies.indexOf(movie);
        movies[likedMovieIndex].liked = !movies[likedMovieIndex].liked;
        this.setState({movies : movies});
    }

    handlePageChange = page => {
        console.log(page);
        this.setState({currentPage : page});
    }

    handleGenreClick = genre => {
        this.setState({selectedGenre : genre, searchQuery:"", currentPage: 1});
    }


    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null,  currentPage: 1});
    }


    handleSort = sortColumn => {
        this.setState({sortColumn : sortColumn});
    }

    componentDidMount () {
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({movies : getMovies(), genres: genres});
    }

    getPageData = () => {
        const { pageSize, currentPage, selectedGenre ,sortColumn, searchQuery ,movies: allMovies } = this.state;
        let filtered = allMovies;

        if (searchQuery){
            filtered= allMovies.filter( m=> m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        }else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter( m=> m.genre._id === selectedGenre._id)

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data:movies};

    }



    render(){

        const {length :count } = this.state.movies;
        const { pageSize, currentPage,sortColumn } = this.state;
        if(count === 0){
            return <p>No movies</p>;
        }
        const {totalCount, searchQuery ,data:movies} = this.getPageData();
          
        return (

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <List
                                itemLists={this.state.genres}
                                selectedItem={this.state.selectedGenre}
                                onItemClick={this.handleGenreClick}
                            />
                        </div>
                        <div className="col-9">
                            <Link
                                to={'/movies/new'}
                                className="btn btn-primary">
                                New Movie
                            </Link>
                            <h1>Total number of movies {totalCount}</h1>

                             <SearchBox value={searchQuery} onChange={this.handleSearch} />

                            <MoviesTable
                                movies={movies}
                                onLike={this.handleLike}
                                onDelete={this.deleteMovie}
                                sortColumn={sortColumn}
                                onSort={this.handleSort}
                            />
                            <Pagination
                                itemsCount={totalCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
        }
}

export default Movie;