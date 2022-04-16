import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

export default function Product(props) {
  const [selected, setSelected] = useState(false);
  if (!props.product) return;

  const handleChange = () => {
    setSelected(!selected);
    //console.log(props)
    props.handleSelection(props.product, !selected)
  }
  const handleRender = () => {
    for(var obj in props.product){
      if(obj != null) return <Card.Text>{obj}</Card.Text>
    }
  }
  return (
    <>
      <Card.Body>
        <Form.Check.Input className='delete-checkbox' type={'checkbox'} checked={selected} onChange={handleChange} />
        <div className='text-center'>
          <Card.Title>{props.product.sku}</Card.Title>
          <Card.Text>{props.product.name}</Card.Text>
          <Card.Text className='text-center'>$ {props.product.value}</Card.Text>
          {handleRender()}
        </div>
      </Card.Body>
    </>
  )
}
