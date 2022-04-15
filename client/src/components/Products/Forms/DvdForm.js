import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const DvdForm = React.forwardRef((props, ref) => {
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup>
      <InputGroup.Text>MB</InputGroup.Text>
      <Form.Control id='size' type='text' placeholder='Size' ref={ref} required/>
    </InputGroup>
</>
  )
})

export default DvdForm