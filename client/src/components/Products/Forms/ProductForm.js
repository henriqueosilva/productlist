import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

const ProductForm = React.forwardRef((props, ref) => {
  const { skuRef, nameRef, priceRef } = ref;
  return (
    <>
      <FloatingLabel controlId='sku' label='SKU'>
        <Form.Control type='text' placeholder='SKU' ref={skuRef} required/>
      </FloatingLabel>
      <FloatingLabel controlId='name' label='Name'>
        <Form.Control type='text' placeholder='Price' ref={nameRef} required/>
      </FloatingLabel>
      <FloatingLabel controlId='price' label='Price $'>
        <Form.Control type='text' placeholder='Price' ref={priceRef} required/>
      </FloatingLabel>
      <FloatingLabel label='Product Type'>
        <Form.Select id='productType' onChange={props.handleChange} required>
          <option></option>
          {props.typeList.map((type, index) => (
            <option key={index} value={type.name}>{type.name}</option>
            ))}
        </Form.Select>
      </FloatingLabel>
      <p className='text-center mt-3'>The selected Type is {props.type}</p>
    </>
  )
})

export default ProductForm