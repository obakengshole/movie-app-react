import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import './App.css'
import AddFavourites from './components/AddFavourites'
import RemoveFavourites from './components/RemoveFavourites'

// when the app loads, the useEffect gets called which always gets called on first render, calls getMovieRequest passing
// in our searchCalue which is an empty string, this gets the movie request, takes the searchValue and sends it to our request
// then we take the response, convert to json, and if we have any search results we set them to state. when the user types the 
// setSearchValue gets called and set to state, because searchValue has changed the useEffect hook get trigged, the getMovieRequest func gets
// called with the new searchValue and the searchValue gets passed to the api
const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([])
  
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`

    const response = await fetch(
      url
    ).then(response => response.json())

    if (response.Search) {
      console.log(response.Search);
      setMovies(response.Search)
    }
  }

  // with this, any value we add to this array cause the useEffect hook to run. When the searchValue changes, getMovieRequest will be called
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]) // empty array here to signal that the request be made when the page loads only. 

  // always runs when the app loads for the first time.
  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    )

    setFavourites(movieFavorites)
  }, [])
  
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }
  
  const addFavouriteMovie = (movie) => {
    if (!favourites.includes(movie)) {
      const newFavouriteList = [...favourites, movie]
      setFavourites(newFavouriteList)
      saveToLocalStorage(newFavouriteList)
    }
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )

    setFavourites(newFavouriteList)
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading title="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading title="Favourites"/>
      </div>
      <div className="row">
        <MovieList movies={favourites} favouriteComponent={RemoveFavourites} handleFavouritesClick={removeFavouriteMovie}/>
      </div>
    </div>
  )
}

export default App;
