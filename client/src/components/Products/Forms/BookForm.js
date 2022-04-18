import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const BookForm = React.forwardRef((props, ref) => {
  const {weightRef} = ref
  const filterNumbersOnly = (e) => {
    e.target.value = e.target.value.replace(/[^.0-9]/g, '')
  }
  const filterLength = (e, maxLength=12) => {
    if(e.target.value.length >= maxLength ){
      e.target.value = e.target.value.substr(0, maxLength)
      console.log(e.target.value.length)
    }
  }
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Weight</Form.Label>
    <InputGroup>
      <InputGroup.Text>KG</InputGroup.Text>
      <Form.Control id='weight' type='text' placeholder='Weight' ref={weightRef} onChange={(e) => {filterNumbersOnly(e);filterLength(e,11)}} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Weight</Form.Control.Feedback>
    </InputGroup>
  </>
  )
})

export default BookForm