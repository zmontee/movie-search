import { reducer as formReducer } from 'redux-form';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {movieListReducer} from "./movieListReducer";
import {movieDetailsReducer} from "./movieDetailsReducer";

const reducers = combineReducers({
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;