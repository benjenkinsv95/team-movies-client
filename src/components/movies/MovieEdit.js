import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import MovieForm from './MovieForm'
import { showMovie, updateMovie } from '../../api/movies'

const MovieEdit = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [updated, setUpdated] = useState(false)
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
        setTitle(res.data.movie.title)
        setDirector(res.data.movie.director)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load movie',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateMovie(id, title, director, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update movie',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/movies/${id}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Edit Movie</h3>
        <MovieForm
          handleSubmit={handleSubmit}
          title={title}
          director={director}
          setTitle={setTitle}
          setDirector={setDirector}
        />
      </div>
    </div>
  )
}

export default MovieEdit
