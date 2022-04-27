import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Product from './Product';

function List(props) {
  const getProducts = () => {
        fetch(`${process.env.REACT_APP_API_URI}/api/product`)
        .then(res => res.json())
        .then(q => props.setProducts(q.data))
  }
  const handleSelection = (data, selected) => {
    if (selected === true){
      props.setSelectedList([...props.selectedList,data])
    }
    if (selected === false){
      props.setSelectedList(props.selectedList.filter(product => product.id !== data.id))
    }
  }
  
    useEffect(()=>{
        if (props.products.length === 0) getProducts();
    },[props.products.length])
  return (
    <Row>
        {props.products[0]?.sku ? props.products.map((product, index)=>(
            <Col className='mb-3' key={index}>
                <Card className='h-100 d-inline-block'>
                    <Product  product={product} handleSelection={handleSelection} />
                </Card>
            </Col>
        )) : "No Products"}
    </Row>
  )
}

export default List