    import * as axios from "axios";
const API_KEY = 'e2b1b1c3';

const instance = axios.create({
    withCredentials: false,
    baseURL: "http://www.omdbapi.com/",
})

export const moviesAPI= {
    getMovies(title, currentPage) {
        return instance.get(`?s=${title}&page=${currentPage}&apikey=${API_KEY}`)
    },
    getMovieDetails(id) {
        return instance.get(`?i=${id}&plot=full&apikey=${API_KEY}`)
    }
}