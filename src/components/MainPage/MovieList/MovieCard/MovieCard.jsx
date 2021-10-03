import React from 'react';
import s from './MovieCard.module.css'
import {NavLink} from "react-router-dom";

const MovieCard = (props) => {

    return (
        <div>
            <div className={s.card}>
                <img
                    src={props.poster != "N/A" ? props.poster : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'}
                    alt='poster'
                    className={s.poster}
                />
                <div className={s.title}>{props.title} ({props.year})</div>
                <NavLink to={'/movie/' + props.imdbID}>
                    <button className={s.details}>More details</button>
                </NavLink>
                <div className={s.type}>{props.type}</div>
            </div>
        </div>
    )
}

export default MovieCard