import React, { useState } from 'react'
import { Container, Toast, ToastContainer } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

export default function Landing() {
  const [showToast, setShowToast] = useState(false);
  return (
    <Container className='mt-3'>
      <Outlet context={[showToast, setShowToast]}/>
      <InsertNotify showToast={showToast} setShowToast={setShowToast}/>
    </Container>
  )
}

export function InsertNotify({...props}) {
  const toggleShowToast = () => props.setShowToast(!props.showToast)
  return (
    <ToastContainer position='bottom-end'>
      <Toast show={props.showToast} onClose={toggleShowToast} delay={3000} className='mb-2' autohide>
        <Toast.Header>
          <strong className='me-auto'>Success</strong>
        </Toast.Header>
        <Toast.Body>
          Product successfuly added!
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}