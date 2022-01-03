import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexMovies } from '../../api/movies'

const Movies = ({ user, msgAlert }) => {
  const [movies, setMovies] = useState(null)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  // Run once, when the component mounts
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await indexMovies(user)
        setMovies(res.data.movies)
      } catch (error) {
        msgAlert({
          heading: 'Movies List failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  // 3 states:
  if (!movies) {
    // If movie is `null`, we are loading
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (movies.length === 0) {
    // If the array of movies is empty, we have no movies to show
    return <h1>No movies yet, go make some!</h1>
  } else {
    // Otherwise, display the movies
    const moviesList = movies.map(movie => (
      <li key={movie._id}>
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      </li>
    ))

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Movies</h3>
          <ul>{moviesList}</ul>
        </div>
      </div>
    )
  }
}

export default Movies
