import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const FurnitureForm = React.forwardRef((props, ref) => {
  const {heightRef, widthRef, lengthRef} = ref
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='height' type='text' placeholder='Height' ref={heightRef} required/>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='width' type='text' placeholder='Width' ref={widthRef} required/>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='length' type='text' placeholder='Length' ref={lengthRef} required/>
    </InputGroup>
</>
  )
})

export default FurnitureForm