import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import FormProduct from './FormProduct';

export default function AddProduct() {
  const skuRef = useRef('');
  const nameRef = useRef('');
  const priceRef = useRef('');
  const weightRef = useRef('');
  const sizeRef = useRef('');
  const heightRef = useRef('');
  const widthRef = useRef('');
  const lengthRef = useRef('');
  const [typeList, setTypeList] = useState([]);
  const [type, setType] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const product = useRef({
    sku: skuRef,
    name: nameRef,
    price: priceRef,
    weight: weightRef,
    size: sizeRef,
    height: heightRef,
    width: widthRef,
    length: lengthRef,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      setError('');
      setLoading(true)
      console.log(product)

    } catch {
      setError("Error on product add");
    }
  }
  const handleChange = (e) => {
    setType(e.target.value)
    setOpen(true)
  }
  const getTypes = () => {
    console.log("During Fetch")
    fetch('http://127.0.1.1/api/type')
    .then(res => res.json())
    .then(q => setTypeList(q.data))
  }
  useEffect(() => {
    if (typeList.length === 0) getTypes();
  }, [typeList.length])
  return (
    <>
      <Container className='mt-3'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div className='d-flex'>
          <h2 style={{minWidth:'115vh'}}>Product Add</h2>
          <div className='justify-content-end'>
            <Button>Save</Button>
            <Button className='ms-3'>Cancel</Button>
          </div>
        </div>
        <hr />
        <div className='d-flex'>
          <Form style={{width:'350px'}} onSubmit={handleSubmit}>
            <Form.Group>
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
                <Form.Select id='productType' onChange={handleChange}>
                  <option></option>
                  {typeList.map((type, index) => (
                    <option key={index} value={type.type}>{type.type}</option>
                    ))}
                </Form.Select>
              </FloatingLabel>
              <p className='text-center mt-3'>The selected Type is {type}</p>
              <FormProduct type={type} open={open} product={product}/>
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-5' variant='success' type='submit'>Add Product</Button>
          </Form>
        </div>
      </Container>
    </>
  )
}


