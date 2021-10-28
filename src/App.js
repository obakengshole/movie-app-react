import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'

const App = () => {
  // `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  const [movies, setMovies] = useState([
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
      "genre_ids": [
          28,
          12,
          878,
          14
      ],
      "id": 140607,
      "original_language": "en",
      "original_title": "Star Wars: The Force Awakens",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "popularity": 69.639,
      "poster_path": "https://image.tmdb.org/t/p/original/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
      "release_date": "2015-12-15",
      "title": "Star Wars: The Force Awakens",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 16244
  },
  {
      "adult": false,
      "backdrop_path": "/epVMXf10WqFkONzKR8V76Ypj5Y3.jpg",
      "genre_ids": [
          878,
          28,
          12
      ],
      "id": 181808,
      "original_language": "en",
      "original_title": "Star Wars: The Last Jedi",
      "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      "popularity": 60.038,
      "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      "release_date": "2017-12-13",
      "title": "Star Wars: The Last Jedi",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 12324
  },
  {
      "adult": false,
      "backdrop_path": "/SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg",
      "genre_ids": [
          28,
          12,
          878
      ],
      "id": 181812,
      "original_language": "en",
      "original_title": "Star Wars: The Rise of Skywalker",
      "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      "popularity": 65.513,
      "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      "release_date": "2019-12-18",
      "title": "Star Wars: The Rise of Skywalker",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 7144
  },
  {
      "adult": false,
      "backdrop_path": "/ojHCeDULAkQK25700fhRU75Tur2.jpg",
      "genre_ids": [
          878,
          12,
          28, 
          80
      ],
      "id": 348350,
      "original_language": "en",
      "original_title": "Solo: A Star Wars Story",
      "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
      "popularity": 39.166,
      "poster_path": "/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
      "release_date": "2018-05-15",
      "title": "Solo: A Star Wars Story",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 6576
  }
  ])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=ab16364f520b39a81d38c19ae5f78d42&language=en-US&query=star wars&page=1"
    const response = await fetch(url)
    const resJson = await response.json()

    console.log(resJson);
    setMovies(resJson.Search)
  }

  useEffect(() => {
    getMovieRequest()
  }, []) // empty array here so signal that the request be made when the page loads only

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
