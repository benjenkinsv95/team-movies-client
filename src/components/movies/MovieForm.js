import React from 'react'
import { Form, Button } from 'react-bootstrap'

const MovieForm = ({ handleSubmit, title, director, setTitle, setDirector }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='A Wonderful Film'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='director'>
      <Form.Label>Director</Form.Label>
      <Form.Control
        placeholder='A Director'
        name='director'
        value={director}
        onChange={event => setDirector(event.target.value)}
      />
    </Form.Group>
    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default MovieForm
