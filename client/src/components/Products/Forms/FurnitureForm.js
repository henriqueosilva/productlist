import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const FurnitureForm = React.forwardRef((props, ref) => {
  const {heightRef, widthRef, lengthRef} = ref
  const [height,setHeight] = useState('');
  const [width,setWidth] = useState('');
  const [length,setLength] = useState('');
  const handleInput = (e, maxLength=12, setFunction) => {
    if(e.target.value.length >= maxLength ) e.target.value = e.target.value.substr(0, maxLength);
    const formatedDecimal = formatDecimal(e.target.value)
    setFunction(formatedDecimal);
  }
  function formatDecimal(number) {
    if(!number) return number;
    const formatedCurrency = number.replace(/[^\d]/g, '')
    if(formatedCurrency.length <= 2) return formatedCurrency;
    const decimal = formatedCurrency.slice(formatedCurrency.length-2)
    const integer = formatedCurrency.slice(0,formatedCurrency.length-2)

    return `${integer}.${decimal}`;
  }
  useEffect(()=>{
    if (heightRef.current?.value) heightRef.current.value = '';
    if (widthRef.current?.value) widthRef.current.value = '';
    if (lengthRef.current?.value) lengthRef.current.value = '';
  }, [heightRef, widthRef, lengthRef])
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='height' type='text' placeholder='Height' ref={heightRef} value={height} onChange={(e)=>handleInput(e,6, setHeight)} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Height</Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='width' type='text' placeholder='Width' ref={widthRef} value={width} onChange={(e)=>handleInput(e,6, setWidth)} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Width</Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-2'>
      <InputGroup.Text>CM</InputGroup.Text>
      <Form.Control id='length' type='text' placeholder='Length' ref={lengthRef} value={length} onChange={(e)=>handleInput(e,6, setLength)} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Length</Form.Control.Feedback>
    </InputGroup>
</>
  )
})

export default FurnitureForm