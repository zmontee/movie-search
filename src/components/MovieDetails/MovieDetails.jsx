import React from 'react';
import s from './MovieDetails.module.css';
import star from '../../assets/img/star.png';
import Preloader from "../common/Preloader/Preloader";

const MovieDetails = (props) => {
    return (
        <>
            <button onClick={() => props.history.goBack()}>
                Back
            </button>
            {props.isFetching ? <Preloader/> : <div className={s.details}>
                <div className={s.container}>
                    <div className={s.head}>
                        <div className={s.title}>
                            <h1 className={s.titleName}>
                                {props.movie.Title}
                            </h1>
                            <div className={s.titleYear}>
                                ({props.movie.Year})
                            </div>
                        </div>
                        <div className={s.rate}>
                            <div>
                                <img src={star} alt='star' className={s.star}/>
                            </div>
                            <div className={s.rateScore}>
                                {props.movie.imdbRating}
                                <span className={s.fromTen}>/10</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.subhead}>
                        {props.movie.Rated} | {props.movie.Runtime} | {props.movie.Genre}  |  {props.movie.Released}
                    </div>
                    <div className={s.content}>
                        <div className={s.poster}>
                            <img src={props.movie.Poster != "N/A" ? props.movie.Poster : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'} alt='poster'/>
                        </div>
                        <div className={s.description}>
                            <div className={s.descrHead}>Director:</div>
                            <div className={s.descr}>{props.movie.Director}</div>
                            <div className={s.descrHead}>Writer:</div>
                            <div className={s.descr}>{props.movie.Writer}</div>
                            <div className={s.descrHead}>Actors:</div>
                            <div className={s.descr}>{props.movie.Actors}</div>
                            <br/>
                            <div className={s.descrPlot}>{props.movie.Plot}</div>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    )
}

export default MovieDetails;