import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

const ProductForm = React.forwardRef((props, ref) => {
  const { skuRef, nameRef, priceRef } = ref;
  return (
    <>
      <FloatingLabel controlId='sku' label='SKU'>
        <Form.Control type='text' placeholder='SKU' ref={skuRef} required/>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Please insert a SKU</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId='name' label='Name'>
        <Form.Control type='text' placeholder='Name' ref={nameRef} required/>
        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>Please insert a Name</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId='price' label='Price $'>
        <Form.Control type='number' placeholder='Price' ref={priceRef} required/>
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