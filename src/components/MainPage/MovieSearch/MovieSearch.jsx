import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './MovieSearch.module.css';
import sForm from '../../common/FormsControls/FormControls.module.css'
import {connect} from "react-redux";
import {getMoviesTC} from "../../../redux/movieListReducer";
import {required} from "../../../utils/validators/validator";
import {Input} from "../../common/FormsControls/FormControls";

const MovieSearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.searchForm}>
                <div>
                    <Field name={"title"}
                           placeholder={"Enter movie title"}
                           component={Input}
                           className={s.movieSearchInput + ' '
                           + (props.error ? sForm.errorInput : '')}
                           validate={required}
                    />
                </div>
                <div>
                    <button className={s.searchBtn}>
                        SEARCH
                    </button>
                </div>
            </div>
            {props.error && <div className={sForm.error}>
                {props.error}
            </div>}
        </form>
    )
}

const MovieSearchReduxForm = reduxForm({
    form: "movieSearch"
})(MovieSearchForm)



const MovieSearch = (props) => {
    const search = (formData) => {
        props.getMovies(formData.title, 1)
    }
    return (
        <div className={s.movieSearch}>
            <h1 className={s.movieSearchHeader}>Search movie</h1>
            <MovieSearchReduxForm onSubmit={search}/>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.movieList.currentPage
    }
}

export default connect(mapStateToProps, {
    getMovies: getMoviesTC
})(MovieSearch)