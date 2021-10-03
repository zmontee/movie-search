import React from 'react';
import MovieSearch from "./MovieSearch/MovieSearch";
import MovieList from "./MovieList/MovieList";
import MovieListContainer from "./MovieList/MovieListContainer";

const MainPage = (props) => {
    return (
        <div>
            <MovieSearch/>
            <MovieListContainer/>
        </div>
    )
}

export default MainPage