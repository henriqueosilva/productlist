import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate, useOutletContext } from 'react-router-dom'

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
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useOutletContext();
  const toggleShowToast = () => setShowToast(!showToast);
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const BookForm = React.lazy(() => import('./Forms/BookForm'))
  const DvdForm = React.lazy(() => import('./Forms/DvdForm'));
  const FurnitureForm = React.lazy(() => import('./Forms/FurnitureForm'));

  const content = async () => {
    const rawResponse = await fetch('https://juniortest-henrique-silva.000webhostapp.com/api/product',{
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
    const content = await rawResponse;
    return content
    
  }
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation()
    }
    e.preventDefault();
    setValidated(true)
    setLoading(true)
    try {
      content().then(res => res.json())
      .then(q => {
        if(q.status !== 'success') {
          setError(q.data);
        }
        if(q.status === 'success') {
          navigate('/')
          toggleShowToast()
        }
      })
    } catch {
      setError("Error communicating with api");
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
    fetch('https://juniortest-henrique-silva.000webhostapp.com/api/type')
    .then(res => res.json())
    .then(q => setTypeList(q.data))
  }
  useEffect(() => {
    if (typeList.length === 0) getTypes();
    weightRef.current = '';
    sizeRef.current = '';
    heightRef.current = '';
    widthRef.current = '';
    lengthRef.current = '';
  }, [typeList.length, handleChange])
  return (
    <>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div className='d-flex'>
          <h2 style={{minWidth:'900px'}}>Product Add</h2>
          <div className='justify-content-end'>
            <Button disabled={loading} variant='success' form='add-product' type='submit'>Save</Button>
            <Button className='ms-3' onClick={handleNavigate}>Cancel</Button>
          </div>
        </div>
        <hr />
        <div className='d-flex'>
          <Form id="add-product" style={{width:'350px'}} onSubmit={handleSubmit} noValidate validated={validated}>
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
    </>


  )
}

