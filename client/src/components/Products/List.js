import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Product from './Product';

function List(props) {
    const [products, setProducts] = useState([]);
    const getProducts = () => {
        fetch('https://juniortest-henrique-silva.000webhostapp.com/api/product')
        .then(res => res.json())
        .then(q => setProducts(q.data))
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
        if (products.length === 0) getProducts();
    },[products.length])
  return (
    <Row>
        {products[0]?.sku ? products.map((product, index)=>(
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