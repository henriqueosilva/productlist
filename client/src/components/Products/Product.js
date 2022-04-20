import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';

export default function Product(props) {
  const [selected, setSelected] = useState(false);
  const [elements, setElements] = useState([])

  const handleChange = () => {
    setSelected(!selected);
    //console.log(props)
    props.handleSelection(props.product, !selected)
  }
  const handleRender = () => {
    for(const [k,v] of Object.entries(props.product)){     
      if(k !== 'sku' && k!== 'name' && k!== 'value' && v !== null){
        setElements(oldElements => [...oldElements, k]);
      }
    }
  }
  useEffect(() => {
    if(elements.length === 0) handleRender();
  },[elements.length])
  return (
    <>
      <Card.Body style={{width:'310px'}}>
        <Form.Check.Input className='delete-checkbox' type={'checkbox'} checked={selected} onChange={handleChange} />
        <div className='text-center'>
          <Card.Title>{props.product.sku}</Card.Title>
          <Card.Text>{props.product.name}</Card.Text>
          <Card.Text className='text-center'>{props.product.value} $</Card.Text>
          {props.product.size !== null ? <Card.Text>Size: {props.product.size} MB</Card.Text> : ""}
          {props.product.height !== null ? <Card.Text>Dimensions: {props.product.height}x{props.product.width}x{props.product.length}</Card.Text> : ""}
          {props.product.weight !== null ? <Card.Text>Weight: {props.product.weight} KG</Card.Text> : ""}
        </div>
      </Card.Body>
    </>
  )
}

