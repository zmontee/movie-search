import React from 'react';
import MovieCard from "./MovieCard/MovieCard";
import s from './MovieList.module.css';
import Preloader from "../../common/Preloader/Preloader";

const MovieList = (props) => {
    const moviesCardsElements = props.movies.map(m => <MovieCard
            title={m.Tidtle}
            year={m.Year}
            imdbID={m.imdbID}
            type={m.Type}
            poster={m.Poster}
        />
    )

    const pagesCount = Math.ceil(props.totalMoviesCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}
                        onClick={() => props.onPageChanged(p)}>{p}
                    </span>
                })}
            </div>

            <div className={s.movieList}>
                {props.isFetching ? <div className={s.preloader}><Preloader/></div> : moviesCardsElements}
            </div>
        </div>

    )
}

export default MovieList