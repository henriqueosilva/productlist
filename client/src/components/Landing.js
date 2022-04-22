import React, { useState } from 'react'
import List from './Products/List'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';

function Landing() {
  const [selectedList, setSelectedList] = useState([]);
  const navigate = useNavigate();
  const navigateAddProduct = () => {
    const path = 'addproduct';
    navigate(path)
  }
  const handleDelete = () => {
    try {
      fetch('https://juniortest-henrique-silva.000webhostapp.com/api/product', {
        method:'POST',
        //body:JSON.stringify(selectedList)
        body: JSON.stringify({method:'delete', products:selectedList})
      }).then(res => res.json())
      .then(q => {
        if(q.data !== 'success'){
        }
        window.location.reload(true)
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
      <List selectedList={selectedList} setSelectedList={setSelectedList}/>
    </Container>
  )
}

export default Landing