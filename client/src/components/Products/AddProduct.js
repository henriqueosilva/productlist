import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import ProductForm from './Forms/ProductForm';

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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const BookForm = React.lazy(() => import('./Forms/BookForm'))
  const DvdForm = React.lazy(() => import('./Forms/DvdForm'));
  const FurnitureForm = React.lazy(() => import('./Forms/FurnitureForm'));

  const content = async () => {
    const rawResponse = await fetch('http://127.0.0.1:8080/api/product',{
    method:'POST',
    body: JSON.stringify({sku:skuRef.current.value,
      name:nameRef.current.value,
      value:priceRef.current.value,
      weight:weightRef.current.value,
      size:sizeRef.current.value,
      height:heightRef.current.value,
      width:widthRef.current.value,
      length:lengthRef.current.value,
      type:type})
    });
    console.log(weightRef.current.value);
    const content = await rawResponse.json();
    console.log(content)
    return content
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      content()
      setError('');
      setLoading(true)
    } catch {
      setError("Error on product add");
    }
    setLoading(false)
  }
  const handleChange = (e) => {
    setType(e.target.value)
  }
  const handleNavigate = () => {
    navigate("/")
  }
  const getTypes = () => {
    console.log("During Fetch")
    fetch('http://127.0.0.1:8080/api/type')
    .then(res => res.json())
    .then(q => setTypeList(q.data))
  }
  useEffect(() => {
    if (typeList.length === 0) getTypes();
    console.log('during effect')
    weightRef.current = '';
    sizeRef.current = '';
    heightRef.current = '';
    widthRef.current = '';
    lengthRef.current = '';
  }, [typeList.length, handleChange])
  return (
    <>
    <Container className='mt-3'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div className='d-flex'>
          <h2 style={{minWidth:'115vh'}}>Product Add</h2>
          <div className='justify-content-end'>
            <Button disabled={loading} variant='success' type='submit' onClick={handleSubmit}>Save</Button>
            <Button className='ms-3' onClick={handleNavigate}>Cancel</Button>
          </div>
        </div>
        <hr />
        <div className='d-flex'>
          <Form style={{width:'350px'}} onSubmit={handleSubmit}>
            <Form.Group>
              <ProductForm handleChange={handleChange}
              typeList={typeList}
              type={type}
              ref={{skuRef:skuRef, nameRef:nameRef, priceRef:priceRef}}/>
            </Form.Group>
            <Suspense fallback={<div>Loading...</div>}>
              {type === 'Book' ? <BookForm ref={{weightRef:weightRef}}/> : ""}
              {type === 'DVD' ? <DvdForm ref={{sizeRef:sizeRef}}/> : ""}
              {type === 'Furniture' ? <FurnitureForm ref={{heightRef:heightRef, widthRef:widthRef, lengthRef:lengthRef}}/> : ""}
            </Suspense>
          </Form>
        </div>
      </Container>
    </>


  )
}

