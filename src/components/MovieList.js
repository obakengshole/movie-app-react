import React from "react";

const MovieList = (props) => {
    const { movies } = props
    console.log(movies);
    return (
        <>
            {
                movies.map((movie) => {
                return (
                    <div>
                        <div key={movie.id} className="d-flex justify-content-start m-3">
                            <img src={movie.Poster} alt="movie"></img>
                        </div>
                    </div>
                )})
            }
        </>
    )
}

export default MovieList