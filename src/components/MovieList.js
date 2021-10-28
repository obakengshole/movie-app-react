import React from "react";

const MovieList = (props) => {
    return (
        <>
            {
                props.movies.map((movie, index) => <div>
                    <div className="d-flex justify-content-start m-3">
                        <img src={movie.backdrop_path} alt="movie"></img>
                    </div>
                </div>)
            }
        </>
    )
}

export default MovieList