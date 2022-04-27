import React, { useState } from 'react'
import List from './Products/List'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';

function Landing() {
  const [products, setProducts] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const navigate = useNavigate();
  const navigateAddProduct = () => {
    const path = 'addproduct';
    navigate(path)
  }
  const handleDelete = () => {
    try {
      console.log(selectedList);
      fetch(`${process.env.REACT_APP_API_URI}/api/product`, {
        method:'POST',
        body: JSON.stringify({method:'delete', products:selectedList})
      }).then(res => res.json())
      .then(q => {
        if(q.data !== 'success'){
        }
        //setSelectedList(selectedList.filter(selected => !selectedList.includes(selected)))
        setProducts(products.filter(product => !selectedList.includes(product)))
      })
    } catch {
    }
  }
  return (
    <Container className='mt-3'>
      <div className='d-flex'>
        <h2 style={{minWidth:'900px'}}>Product List</h2>
        <div className='justify-content-end'>
          <Button onClick={navigateAddProduct}>ADD</Button>
          <Button id='delete-product-btn' className='ms-3' variant='danger' onClick={handleDelete}>MASS DELETE</Button>
        </div>
      </div>
      <hr />
      <List products={products} setProducts={setProducts} selectedList={selectedList} setSelectedList={setSelectedList} />
    </Container>
  )
}

export default Landing