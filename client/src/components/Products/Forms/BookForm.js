import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const BookForm = React.forwardRef((props, ref) => {
  const {weightRef} = ref
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Weight</Form.Label>
    <InputGroup>
      <InputGroup.Text>KG</InputGroup.Text>
      <Form.Control id='weight' type='text' placeholder='Weight' ref={weightRef} required/>
    </InputGroup>
  </>
  )
})

export default BookForm