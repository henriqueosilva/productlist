import React, { useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const DvdForm = React.forwardRef((props, ref) => {
  const {sizeRef} = ref
  const filterNumbersOnly = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '')
  }
  const filterLength = (e, maxLength=12) => {
    if(e.target.value.length >= maxLength ){
      e.target.value = e.target.value.substr(0, maxLength)
      console.log(e.target.value.length)
    }
  }
  useEffect(()=>{
    if (sizeRef.current?.value) sizeRef.current.value = '';
  }, [sizeRef])
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup>
      <InputGroup.Text>MB</InputGroup.Text>
      <Form.Control id='size' type='text' placeholder='Size' ref={sizeRef} onChange={(e) => {filterNumbersOnly(e); filterLength(e,8)}} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Size</Form.Control.Feedback>
    </InputGroup>
</>
  )
})

export default DvdForm