import React from 'react'
import { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



const data = [
  {
    title: 'this is title 1',
    img: '/images/sample-product.png',
    description: 'Organic Aloe Vera Skin Healing Gel makes a great after-sun for those days when you’ve been caught out by the sun. But you can also use it for insect bites, grazes, rashes, acne, minor burns and wounds, redness, and itching.',
    gram: '300gram',
    url: '/images/product-image1.jpg',
    text: 'This is Sample Text 5'
  },
  {
    title: 'this is title 2',
    img: '/images/sample-product.png',
    description: 'Organic Aloe Vera Skin Healing Gel makes a great after-sun for those days when you’ve been caught out by the sun. But you can also use it for insect bites, grazes, rashes, acne, minor burns and wounds, redness, and itching.',
    gram: '400gram'
  },
  {
    title: 'this is title 3',
    img: '/images/sample-product.png',
    description: 'Organic Aloe Vera Skin Healing Gel makes a great after-sun for those days when you’ve been caught out by the sun. But you can also use it for insect bites, grazes, rashes, acne, minor burns and wounds, redness, and itching.',
    gram: '500gram'
  },
  {
    title: 'this is title 4',
    img: '/images/sample-product.png',
    description: 'Organic Aloe Vera Skin Healing Gel makes a great after-sun for those days when you’ve been caught out by the sun. But you can also use it for insect bites, grazes, rashes, acne, minor burns and wounds, redness, and itching.',
    gram: '600gram'
  }
]


const HouseHoldProducts = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (value) => {
    setModalData(value)
    setShow(true)
  };

  const [modalData,setModalData]=useState([])
  

  return (
    <>
      <Container>
        <h1>House Hold Products</h1>
        <Row>
          {data && data.map((value, index) => {
            return (
              <>
                <Col>
                  <Card style={{ width: '18rem' }} key={`card-${index}`}>
                    <Card.Img variant="top" src={value.url} />
                    <Card.Body>
                      <Card.Text>{value.text}</Card.Text>
                      <Button variant="primary" onClick={()=>handleShow(value)}>
                        Launch demo modal
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6} sm={12}>
                <img src={modalData.img} alt="" className='img-fluid' />
              </Col>
              <Col md={6} sm={12}>
                <div className="moddal-content">
                  <h3>{modalData.title}</h3>
                  <p>{modalData.text}</p>
                  <p>{modalData.gram}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HouseHoldProducts