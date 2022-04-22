import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const BookForm = React.forwardRef((props, ref) => {
  const {weightRef} = ref
  const [weight,setWeigth] = useState('');
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
    if (weightRef.current?.value) weightRef.current.value = '';
  },[weightRef])
  return (
    <>
    <Form.Label htmlFor='' visuallyHidden>Weight</Form.Label>
    <InputGroup>
      <InputGroup.Text>KG</InputGroup.Text>
      <Form.Control id='weight' type='text' placeholder='Weight' ref={weightRef} value={weight} onChange={(e) => handleInput(e, 11, setWeigth)} required/>
      <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>Please insert a Weight</Form.Control.Feedback>
    </InputGroup>
  </>
  )
})

export default BookForm