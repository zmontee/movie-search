import React from 'react';
import MovieDetails from "./MovieDetails";
import {getMovieDetailsTC} from "../../redux/movieDetailsReducer";
import {connect} from "react-redux";

class MovieDetailsContainer extends React.Component {
    refreshMovie() {
        const movieId = this.props.match.params.movieId;
        this.props.getMovieDetails(movieId);
    }

    componentDidMount() {
        this.refreshMovie();
    }
o
    render() {
        return (
            <MovieDetails   {...this.props}
                            movie={this.props.movie}
                            isFetching={this.props.isFetching}
                />
        )
    }
}

const mapStateToProps = (state) => ({
        movie: state.movieDetails.movie,
        isFetching: state.movieDetails.isFetching
})

export default connect(mapStateToProps,{
    getMovieDetails: getMovieDetailsTC
})(MovieDetailsContainer);

