import React from "react";

const MovieList = (props) => {
    const movies = props.movies
    const FavouriteComponent = props.favouriteComponent

    return (
        <>
            {
                movies.map((movie) => {
                return (
                    <div>
                        <div key={movie.imdbID} className="image-container d-flex justify-content-start m-3">
                            <img src={movie.Poster} alt="movie"></img>
                            <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-start">
                                <FavouriteComponent />
                            </div>
                        </div>
                    </div>
                )})
            }
        </>
    )
}

export default MovieList