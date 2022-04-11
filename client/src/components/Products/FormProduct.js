import React, { useRef, useState } from 'react'
import { Col, Collapse, FloatingLabel, Form, InputGroup } from 'react-bootstrap'

export default function FormProduct(props) {
  console.log(props)
  const HandleProductType = () => {
    if (props.type === 'Book') return <BookForm props={props}/>;
    if (props.type === 'Dvd') return <DvdForm props={props} />;
    if (props.type === 'Furniture') return <FurnitureForm props={props} />;
  }
  /* useEffect(() => {
    handleProductType()
  }, []) */
  return (
    <>
      {<HandleProductType />}
    </>
  )
}

function BookForm({props}){
  console.log(props)
  const weightRef = useRef('');
  return (
    <>
      <>
        <Form.Label htmlFor='' visuallyHidden>Weight</Form.Label>
          <InputGroup>
            <InputGroup.Text>KG</InputGroup.Text>
            <Form.Control id='weight' type='text' placeholder='Weight' ref={props.product.current.weightRef} required/>
          </InputGroup>
      </>
    </>
  )
}
function DvdForm({props}){
  const sizeRef = useRef('');
  return (
    <>
    <>
      <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
        <InputGroup>
          <InputGroup.Text>MB</InputGroup.Text>
          <Form.Control id='size' type='text' placeholder='Size' ref={props.product.current.sizeRef} required/>
        </InputGroup>
    </>
  </>
  )
}
function FurnitureForm({props}){
  const heightRef = useRef('');
  const widthRef = useRef('');
  const lengthRef = useRef('');
  return (
    <>
    <>
      <Form.Label htmlFor='' visuallyHidden>Size</Form.Label>
        <InputGroup className='mb-2'>
          <InputGroup.Text>CM</InputGroup.Text>
          <Form.Control id='height' type='text' placeholder='Height' ref={props.product.current.heightRef} required/>
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text>CM</InputGroup.Text>
          <Form.Control id='width' type='text' placeholder='Width' ref={props.product.current.widthRef} required/>
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text>CM</InputGroup.Text>
          <Form.Control id='length' type='text' placeholder='Length' ref={props.product.current.lengthRef} required/>
        </InputGroup>
    </>
  </>
  )
}