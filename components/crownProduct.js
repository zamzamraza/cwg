import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import { CROWN_PRODUCT_DATA } from "@/utils/constant";

const CrownProducts = () => {

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
      <section className='product-container'>
        <Container>
          <h1 className="text-center m-5">Crown Products</h1>
          <Row>
            {CROWN_PRODUCT_DATA && CROWN_PRODUCT_DATA.map((value, index) => {
                return (
                  <>
                    <Col>
                      <Card style={{ width: '16rem' }} key={`card-${index}`}>
                        <Card.Img variant="top" src={value.productImage} />
                        <Card.Body>
                          <Card.Text className='text-center'>{value.productTitle}</Card.Text>
                          <Button variant="outline-info" style={{ width: '100%' }} onClick={() => handleShow(value)}>
                            Quick View
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Container>
      </section>

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
              <Col md={5} xs={10}>
                <Swiper
                  grabCursor={true}
                  pagination={true}
                  navigation={true}
                  loop={true}
                  modules={[EffectFlip, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {modalData && modalData?.modalImages?.map((image, index) => {
                    return (
                      <>
                        <SwiperSlide>
                          <img
                            className="img-fluid"
                            // width={400}
                            // height={150}
                            src={image?.src} />
                        </SwiperSlide>
                      </>
                    )
                  })}
                </Swiper>
              </Col >

              <Col md={7} xs={12}>
                <div className="moddal-content">
                  {/* <h3>{modalData.modalTitle}</h3> */}
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
}
 
export default CrownProducts