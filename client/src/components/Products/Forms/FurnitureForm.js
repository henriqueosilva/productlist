import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const FurnitureForm = React.forwardRef((props, ref) => {
  const {heightRef, widthRef, lengthRef} = ref
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='height' type='number' placeholder='Height' ref={heightRef} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Height</Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='width' type='number' placeholder='Width' ref={widthRef} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Width</Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='length' type='number' placeholder='Length' ref={lengthRef} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Length</Form.Control.Feedback>
    </InputGroup>
</>
  )
})

export default FurnitureForm