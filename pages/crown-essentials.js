import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Col, Container, Row } from 'react-bootstrap';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CrownEssentials = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="c-e-i">
            <img src="/images/crown-1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="c-e-i">
            <img src="/images/test-image.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="c-e-i">
            <img src="/images/crown-2.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <section className='sec-1'>
        <Container className='inner-container'>
          <Row>
            <Col md={6} sm={0}>
              {/* empty col */}
            </Col>
            <Col md={6} sm={12} >
              <div className="content">
                <h3>Benefits of using Crown Aloe Vera Gel</h3>
                <p>All Natural Crown Aloe Vera Gel - 98% Pure & Organic Aloe Vera Gel Moisturizer - Hydrates & Heals Dry, Itchy & Damaged Skin & Hair - Acne, Sunburn, Rash & Dandruff Relief 98%, Our gel is formulated from 98% pure aloe extract which is carefully processed and cold-pressed to retains its essential nutrients and vitamins.</p>
                <div className="checkmarks">
                  <p>
                    <span className="check-icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Our gel is formulated from 98% pure aloe extract which is carefully processed and cold pressed to retains its essential nutrients and vitamins.</p>
                  <p>
                    <span className="check-icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Packed with potent vitamins and minerals, Crown Aloe Vera gel helps to calm irritated skin and moisturise dry skin.</p>
                  <p>
                    <span className="check-icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Crown Aloe Vera gel contains an enzyme known as proteolytic that helps to treat itchy scalp and prevent dandruff.</p>
                  <p>
                    <span className="check-icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Manufactured with a stringent manufacturing process and gone through strict quality checks, our aloe Vera gel does not contain any of the harsh or not-so-good-for-you ingredients or fillers.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* sec 2 */}
      <section className='sec-2'>
        <Container className='sec-2-container'>
          <Row className='rowww'>
            <Col md={6}>

              <div className="content-container">
                <img src="/images/crown-skin.jpg" alt="" className='img-fluid' />
                <p>Crown Skin Products helps to calm irritated skin and moisturize dry skin. It provides instant relief on contact, hydrating the top three layers of skin.</p>
              </div>

            </Col>
            <Col md={6}>

              <div className="content-container">
                <img src="/images/crown-hair.png" alt="" className='img-fluid' />
                <p>Crown Skin Products helps to calm irritated skin and moisturize dry skin. It provides instant relief on contact, hydrating the top three layers of skin.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      {/* sec 3 */}
      <section className='sec-3'>
        <Container>
          <Row>
            <Col md={6} sm={0} ></Col>
            <Col md={6} sm={12}>
              <div className='about-essentials'>
                <h4>About</h4>
                <h3>Crown Essentials</h3>
                <p>Crown Essentials provides you with the best skin products. We care about your skin's health and give you the right products to make your routine a true breeze.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* sec 4 */}
      <section className="sec-4">
        <h2 className='text-center'>Our Blogs</h2>
        <Container className='sec-4-container'>
          <Row className=''>
            <Col md={6}>
              <div className="sec-4-content">
                <img src="/images/crown-hair2.png" className='img-fluid' alt="" />
                <div className="sec-4-content-wrapper">
                  <h3>Believe in clean, kind, and effective skincare that works</h3>
                  <p>We know good skin starts with good ingredients, therefore, we only use skin loving ingredients & vitamins that your skin needs and nothing it doesn't. We never use anything unnecessary or too much for skin or worse, irritating ingredients like harsh chemicals, colour or perfume.</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="sec-4-content">
                <img src="/images/crown-hair2.png" className='img-fluid' alt="" />
                <div className="sec-4-content-wrapper">
                  <h3>Say hello to Aloe Vera Hair Products!</h3>
                  <p>Our Potent Aloe shampoos & conditioners are infused with hand-picked and Royal Botanic Gardens, Kew certified aloe. They will leave your hair hydrated and refreshed. This collection includes products for healthy hairs and deep moisture.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* sec 5 */}
      <section className="sec-5">
        <div className="container-fluid">
          <Row className='sec-5-row'>
            <Col md={4}>
              <div className="sec-5-content">
                <div className="sec-5-img-container">
                  <img src="/images/source.png" className='img-fluid' alt="" />
                </div>
                <div className="sec-5-text-container">
                  <h3>Authentic</h3>
                  <h3>Products</h3>
                  <p>Sourced Directly From Farms</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sec-5-content">
                <div className="sec-5-img-container">
                  <img src="/images/source.png" className='img-fluid' alt="" />
                </div>
                <div className="sec-5-text-container">
                <h3>Available</h3>
                  <h3>For Exports</h3>
                  <p>Available for Exports Across GCC</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sec-5-content">
                <div className="sec-5-img-container">
                  <img src="/images/source.png" className='img-fluid' alt="" />
                </div>
                <div className="sec-5-text-container">
                <h3>Available In 50+</h3>
                  <h3>Hypermarkets</h3>
                  <p>Sourced Directly From Farms</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default CrownEssentials