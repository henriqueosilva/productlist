import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const FurnitureForm = React.forwardRef((props, ref) => {
  const {heightRef, widthRef, lengthRef} = ref
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
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='height' type='text' placeholder='Height' ref={heightRef} onChange={(e)=>{filterNumbersOnly(e);filterLength(e,6)}} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Height</Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='width' type='text' placeholder='Width' ref={widthRef} onChange={(e)=>{filterNumbersOnly(e);filterLength(e,6)}} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Width</Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='length' type='text' placeholder='Length' ref={lengthRef} onChange={(e)=>{filterNumbersOnly(e);filterLength(e,6)}} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Length</Form.Control.Feedback>
    </InputGroup>
</>
  )
})

export default FurnitureForm