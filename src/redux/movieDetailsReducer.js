import {moviesAPI} from "../api/api";

const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    movie: {},
    isFetching: false
}

export const movieDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIE_DETAILS:
            return {
                ...state,
                movie: action.movie
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setMovieDetailsAC = (movie) => ({type: SET_MOVIE_DETAILS, movie});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getMovieDetailsTC = (id) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const response = await moviesAPI.getMovieDetails(id);
    dispatch(setMovieDetailsAC(response.data));
    dispatch(toggleIsFetchingAC(false));
}