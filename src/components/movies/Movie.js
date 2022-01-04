import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteMovie, showMovie } from '../../api/movies'

const Movie = ({ user, msgAlert }) => {
  const [movie, setMovie] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showMovie(id, user)
        setMovie(res.data.movie)
      } catch (error) {
        msgAlert({
          heading: 'Movie failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteMovie(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete movie',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If movie is `null`, we are loading
  if (!movie) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/movies' />
  } else {
    // We have a movie, display it!
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{movie.title}</h3>
          <p>Director: {movie.director}</p>
          <Button variant='danger' onClick={handleDeleteClick}>Delete Movie</Button>
          <Link to={`/movies/${id}/edit`}>
            <Button variant='primary' type='submit'>Update Movie</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Movie
