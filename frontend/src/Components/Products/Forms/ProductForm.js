import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

const ProductForm = React.forwardRef((props, ref) => {
  const { skuRef, nameRef, priceRef } = ref;
  const [value,setValue] = useState('');
  const handleInput = (e, maxLength=12) => {
    if(e.target.value.length >= maxLength ) e.target.value = e.target.value.substr(0, maxLength);
    const formatedDecimal = formatDecimal(e.target.value)
    setValue(formatedDecimal);
  }
  function formatDecimal(number) {
    if(!number) return number;
    const formatedCurrency = number.replace(/[^\d]/g, '')
    if(formatedCurrency.length <= 2) return formatedCurrency;
    const decimal = formatedCurrency.slice(formatedCurrency.length-2)
    const integer = formatedCurrency.slice(0,formatedCurrency.length-2)

    return `${integer}.${decimal}`;
  }
  const filterLength = (e, maxLength=12) => {
    if(e.target.value.length >= maxLength ){
      e.target.value = e.target.value.substr(0, maxLength)
    }
  }
  return (
    <>
      <FloatingLabel controlId='sku' label='SKU'>
        <Form.Control type='text' placeholder='SKU' ref={skuRef} onChange={filterLength} required/>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Please insert a SKU</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId='name' label='Name'>
        <Form.Control type='text' placeholder='Name' ref={nameRef} onChange={(e) => {filterLength(e,32)}} required/>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Please insert a Name</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId='price' label='Price $'>
        <Form.Control type='text' placeholder='Price' ref={priceRef} onChange={(e) => handleInput(e,15)} value={value} required/>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Please insert a Price</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel label='Product Type'>
        <Form.Select id='productType' onChange={props.handleChange} required>
          <option></option>
          {props.typeList.map((type, index) => (
            <option key={index} value={type.name}>{type.name}</option>
            ))}
        </Form.Select>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Please select a type</Form.Control.Feedback>
      </FloatingLabel>
      <p className='text-center mt-3'>The selected Type is {props.type}</p>
    </>
  )
})

export default ProductForm