import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

const HairCare = () => {
    const [showModal, setShowModal] = useState(false);

    const MyModal = () => {
      return(
        <>
            <h1>This is Title</h1>
            <p>This is Descreption</p>
            <Button onClick={() => setShowModal(false)} variant='dark'>Close Modal</Button>
        </>
      )
    }
  return (
    <>
     <Button onClick={() => setShowModal(true)} variant='dark'>Open Modal</Button>
     {showModal && <MyModal />}
    </>
  )
}

export default HairCare