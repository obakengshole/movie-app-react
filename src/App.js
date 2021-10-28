import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  
  const getMovieRequest = async () => {
    const url = "https://www.omdbapi.com/?s=star wars&apikey=263d22d8"

    const response = await fetch(
      url
    ).then(response => response.json())

    console.log(response.Search);
    setMovies(response.Search)
  }

  useEffect(() => {
    getMovieRequest()
  }, []) // empty array here to signal that the request be made when the page loads only

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading title="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App;
