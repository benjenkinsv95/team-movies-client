import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import MovieForm:
import MovieForm from './MovieForm'
import { createMovie } from '../../api/movies'

const MovieCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createMovie(title, director, user)
      setCreatedId(res.data.movie._id)

      msgAlert({
        heading: 'Movie Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create movie',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if movie has been created,Navigate to the 'show' page
    return <Navigate to={`/movies/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Movie</h3>
        <MovieForm
          handleSubmit={handleSubmit}
          title={title}
          director={director}
          setTitle={setTitle}
          setDirector={ setDirector }
        />
      </div>
    </div>
  )
}

export default MovieCreate
