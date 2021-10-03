import MovieList from "../components/MainPage/MovieList/MovieList";
import {moviesAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_TITLE = 'SET_TITLE';
const SET_MOVIES = 'SET_MOVIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOTAL_MOVIES_COUNT = 'SET_TOTAL_MOVIES_COUNT';

const initialState = {
    title: '',
    movies: [],
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    totalMoviesCount: 0
}

export const movieListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_TOTAL_MOVIES_COUNT:
            return {
                ...state,
                totalMoviesCount: action.totalMoviesCount
            }
        default:
            return state;
    }
}

export const setTitleAC = (title) => ({type: SET_TITLE, title})
export const setMoviesAC = (movies) => ({type: SET_MOVIES, movies});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTotalMoviesCountAC = (totalMoviesCount) => ({type: SET_TOTAL_MOVIES_COUNT, totalMoviesCount});

export const getMoviesTC = (title, currentPage) => async (dispatch) => {

    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(currentPage));
    dispatch(setTitleAC(title));
    let response = await moviesAPI.getMovies(title, currentPage);
    if(response.data.Response === "True") {
        dispatch(setMoviesAC(response.data.Search));
        dispatch(setTotalMoviesCountAC(response.data.totalResults));
    } else dispatch(stopSubmit('movieSearch', {_error: response.data.Error}));
    dispatch(toggleIsFetchingAC(false));

}