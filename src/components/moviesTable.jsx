import React, { Component } from 'react';
import Like from "./like";
import Table from './common/table';

class MoviesTable extends Component {

    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key:'like', label: 'Like',
            content: movie => <Like liked={movie.liked} onClick={ () => this.props.onLike(movie)}
            />
            },
        { key: 'delete', label: 'Action',
            content: movie => (
                <button onClick={ () => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >Delete</button>)
        },
    ];

    render(){
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
        return (

            <Table
                columns={ this.columns }
                data = {movies}
                sortColumn={ sortColumn }
                onSort={ onSort }
            />

            // <table className="table">
            //     <TableHeader
            //         columns={this.columns}
            //         sortColumn={sortColumn}
            //         onSort={onSort}
            //     />
            //     <TableBody
            //         columns={this.columns}
            //         rows={movies}
            //         onLike={onLike}
            //         onDelete={onDelete}
            //     />
            //
            // </table>
        );
    }


}


export default MoviesTable;