import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";

const SkinCare = () => {
  const data = [
    {
      productTitle: "This is product Title 1",
      productImage: "/images/sample-product.png",
      productText: "This is Product Text 1",
      modalTitle: "This is modal Title 1",
      modalText: "This is modal text 1",
      modalImages: [
        { src: "/images/product-image1.jpg", id: 1 },
        { src: "/images/sample-product.png", id: 2 }
      ],
      modalQuantity: "100-gram"
    },
    {
      productTitle: "This is product Title 2",
      productImage: "/images/sample-product.png",
      productText: "This is Product Text 2",
      modalTitle: "This is modal Title 2",
      modalText: "This is modal text 2",
      modalImages: [
        { src: "/images/product-image1.jpg", id: 1 },
        { src: "/images/sample-product.png", id: 2 }
      ],
      modalQuantity: "100-gram"
    },
    {
      productTitle: "This is product Title 3",
      productImage: "/images/sample-product.png",
      productText: "This is Product Text 3",
      modalTitle: "This is modal Title 3",
      modalText: "This is modal text 3",
      modalImages: [
        { src: "/images/product-image1.jpg", id: 1 },
        { src: "/images/sample-product.png", id: 2 }
      ],
      modalQuantity: "100-gram"
    },
    {
      productTitle: "This is product Title 4",
      productImage: "/images/sample-product.png",
      productText: "This is Product Text",
      modalTitle: "This is modal Title 4",
      modalText: "This is modal text 4",
      modalImages: [
        { src: "/images/product-image1.jpg", id: 1 },
        { src: "/images/sample-product.png", id: 2 }
      ],
      modalQuantity: "100-gram"
    }
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (value) => {
    setModalData(value);
    setModalImages(value.modalImages[0]);
    setShow(true);
  };

  const [modalData, setModalData] = useState([]);
  const [modalImages, setModalImages] = useState([]);
  return (
    <>
      <Container>
        <h1>Skin Care Products</h1>
        <Row>
          {data &&
            data.map((value, index) => {
              return (
                <>
                  <Col>
                    <Card style={{ width: "18rem" }} key={`card-${index}`}>
                      <Card.Img variant="top" src={value.productImage} />
                      <Card.Body>
                        <Card.Text>{value.productTitle}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => handleShow(value)}
                        >
                          Launch demo modal
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalData.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6} sm={12}>
                {modalData &&
                  modalData?.modalImages?.map((image, index) => {
                    return (
                      <Image
                        src={image.src}
                        key={image.id}
                        alt=""
                        className="img-fluid"
                        width={150}
                        onClick={(e) =>
                          setModalImages({ src: image.src, id: index })
                        }
                        height={150}
                      />
                    );
                  })}
                <Col md={12} sm={12}>
                  <Image
                    src={modalImages?.src}
                    key={modalImages?.id}
                    alt=""
                    className="img-fluid"
                    width={300}
                    height={150}
                  />
                </Col>
              </Col>
              <Col md={6} sm={12}>
                <div className="moddal-content">
                  <h3>{modalData.modalTitle}</h3>
                  <p>{modalData.modalText}</p>
                  <p>{modalData.modalQuantity}</p>
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
  );
};

export default SkinCare;
