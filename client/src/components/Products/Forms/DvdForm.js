import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const DvdForm = React.forwardRef((props, ref) => {
  const {sizeRef} = ref

  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup>
      <InputGroup.Text>MB</InputGroup.Text>
      <Form.Control id='size' type='number' placeholder='Size' ref={sizeRef} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Size</Form.Control.Feedback>
    </InputGroup>
</>
  )
})

export default DvdForm