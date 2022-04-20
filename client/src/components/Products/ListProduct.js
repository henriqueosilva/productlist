import React, { useEffect, useRef, useState } from 'react'
import Product from './Product'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Button, Card, Container } from 'react-bootstrap'

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  //const [show, setShow] = useState(false);
  const btnRef = useRef();
  //const [showToast, setShowToast] = useOutletContext();
  //const handleShow = () => setShow(true);
  //const handleClose = () => setShow(false);
  //const toggleShowToast = () => setShowToast(!showToast)
  const navigate = useNavigate();
  const navigateAddProduct = () => {
    const path = 'addproduct';
    navigate(path)
  }
  const getProducts = () => {
    fetch('https://juniortest-henrique-silva.000webhostapp.com/api/product')
    .then(res => res.json())
    .then(q => setProducts(q.data))
  }
  const handleSelection = (data, selected) => {
    if (selected === true){
      setSelectedList([...selectedList,data])
    }
    if (selected === false){
      setSelectedList(selectedList.filter(product => product.id !== data.id))
    }
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
  useEffect(()=>{
    if (products.length === 0) getProducts();
    document.title = "Product List"
  },[products.length])
  //console.dir(btnRef.current)
  return (
    <Container className='mt-3'>
          <button onClick={navigateAddProduct}>ADD</button>
          <button id='delete-product-btn' onClick={handleDelete}>MASS DELETE</button>
      <div className='d-flex'>
      <h2 style={{minWidth:'900px'}}>Product List</h2>
        <div className='justify-content-end'>
          {/* <Button onClick={navigateAddProduct}>ADD</Button> */}
          {/* <Button id='delete-product-btn' ref={btnRef} className='ms-3' variant='danger' onClick={handleDelete} disabled={loading}>MASS DELETE</Button> */}
        </div>
      </div>
      <hr />
        <Row className='row-cols-3'>
          {products[0]?.sku ? products.map((product, index)=>(
            <Col className='mb-3' key={index}>
              <Card className='h-100 d-inline-block'>
                <Product product={product} handleSelection={handleSelection}/>
              </Card>
            </Col>
          )) : "No Products"}
        </Row>

      {/*<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>  
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {selectedList.length} products?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleDelete(); handleClose()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>*/}
    </Container>
  )
}
