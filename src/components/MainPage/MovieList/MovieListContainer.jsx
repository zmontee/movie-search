import React from 'react';
import {connect} from "react-redux";
import {getMoviesTC} from "../../../redux/movieListReducer";
import MovieList from "./MovieList";

const MovieListContainer = (props) => {
    const onPageChanged = (pageNumber) => {
        props.getMovies(props.title, pageNumber);
    }

    return (
        <div>
            <MovieList
                movies={props.movies}
                isFetching={props.isFetching}
                totalMoviesCount={props.totalMoviesCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                isFetching={props.isFetching}
                onPageChanged={onPageChanged}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.movieList.title,
        movies: state.movieList.movies,
        pageSize: state.movieList.pageSize,
        totalMoviesCount: state.movieList.totalMoviesCount,
        currentPage: state.movieList.currentPage,
        isFetching: state.movieList.isFetching
    }
}

export default connect(mapStateToProps, {
    getMovies: getMoviesTC
})(MovieListContainer);

/*



const MovieListContainer = connect(mapStateToProps, {
        getMovies: getMoviesTC
    }
)(MovieListAPI);*/
