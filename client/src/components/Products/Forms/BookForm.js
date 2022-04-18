import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const BookForm = React.forwardRef((props, ref) => {
  const {weightRef} = ref
  const filterNumbersOnly = (e) => {
    e.target.value = e.target.value.replace(/[^.0-9]/g, '')
  }
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Weight</Form.Label>
    <InputGroup>
      <InputGroup.Text>KG</InputGroup.Text>
      <Form.Control id='weight' type='text' placeholder='Weight' ref={weightRef} onChange={filterNumbersOnly} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Weight</Form.Control.Feedback>
    </InputGroup>
  </>
  )
})

export default BookForm