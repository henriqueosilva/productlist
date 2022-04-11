import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Row, Col, Container, Button, Card, Modal } from 'react-bootstrap'

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const getProducts = () => {
    fetch('http://dummyjson.com/products')
    .then(res => res.json())
    .then(q => setProducts(q.products))
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
    console.log("Confirmed deletion")
  }
  useEffect(()=>{
    if (products.length === 0) getProducts();
    document.title = "Product List"
  },[products.length])
  return (
    <>
      <Container>
        <div className='d-flex justify-content-end py-3'>
          <Button onClick={handleShow}>Add</Button>
          <Button id='delete-product-btn' className='ms-3' variant='danger' onClick={handleShow}>Mass Delete</Button>
        </div>
        <Row className='row-cols-4'>
          {products.map((product, index)=>(
            <Col className='mb-3' style={{}} key={index}>
              <Card className='h-100 d-inline-block'>
                <Product product={product} handleSelection={handleSelection}/>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>  
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {selectedList.length} products?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleClose() && handleDelete()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
