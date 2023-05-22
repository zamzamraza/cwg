import React from 'react'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Col, Container, Row } from 'react-bootstrap';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CrownProducts from '@/components/crownProduct';


const CrownEssentials = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
            <img src="/images/crown-new.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="c-e-i">
            <img src="/images/scrubs-banner.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="c-e-i">
            <img src="/images/oil-banner-of crown-essential.jpg" alt="" />
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
                <img src="/images/skin.webp" alt="" className='img-fluid' />
                <p>Crown Skin Products helps to calm irritated skin and moisturize dry skin. It provides instant relief on contact, hydrating the top three layers of skin.</p>
              </div>

            </Col>
            <Col md={6}>

              <div className="content-container">
                <img src="/images/OIL.webp" alt="" className='img-fluid' />
                <p>Crown Skin Products helps to calm irritated skin and moisturize dry skin. It provides instant relief on contact, hydrating the top three layers of skin.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <CrownProducts />
      {/* sec 3 */}
      <section className='sec-3'>
        <Container>
          <div className='about-essentials'>
            <h4>About</h4>
            <h3>Crown Essentials</h3>
            <p>Our brand, Crown Essentials, offers a range of natural and organic skincare and haircare products, including Aloe Vera Gel, various scrubs, and hair oil. We use high-quality ingredients in all of our products to help nourish and revitalize the skin and hair. Our commitment to providing safe and effective products has made us a popular choice for those seeking natural and organic beauty solutions.</p>
          </div>
        </Container>
      </section>
      {/* sec 4 */}
      <section className="sec-4">
        <h2 className='text-center mb-3'>Our Blogs</h2>
        <Container className='sec-4-container'>
          <Row className=''>
            <Col md={6} sm={12}>
              <div className="sec-4-content">
                <img src="/images/aloegel-with-rose-blog.jpg" className='img-fluid' alt="" />
                <div className="sec-4-content-wrapper">
                  <h3>Revitalize Your Skin with the Powerful Duo of Crown Aloe Vera Gel and Rose Water
                  </h3>
                  <p>Crown Aloe Vera Gel and Crown Rose Water are two amazing skincare products that can work wonders when used together. Both products are known for their soothing and hydrating properties, and when combined, they can help rejuvenate and nourish the skin. To use Crown Aloe Vera Gel with Crown Rose Water, simply mix equal parts of both products in your hand and apply it to your face and neck. This can be done in the morning or at night before bed. The combination of the two products will help to hydrate and soothe the skin while also reducing inflammation and redness. Overall, Crown Aloe Vera Gel and Crown Rose Water are two amazing products that work even better when used together. They can help to soothe and hydrate the skin while reducing inflammation and redness. If you re looking for a natural and effective way to rejuvenate your skin, give this combination a try!</p>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="sec-4-content">
                <img src="/images/our-blog-turmeric.jpg" className='img-fluid' alt="" />
                <div className="sec-4-content-wrapper">
                  <h3>Unlock the Secret to Glowing Skin with Crown Aloe Vera Gel and Turmeric Fusion</h3>
                  <p>Turmeric has been used in traditional medicine for centuries for its anti-inflammatory and antioxidant properties. When combined with Crown Pure 99% Aloe Vera Gel, it amplifies the benefits of aloe vera. The gel can soothe and heal the skin while also providing anti-aging benefits. To use the Crown Pure 99% Aloe Vera Gel with turmeric, mix a small amount of turmeric powder with the gel and apply it to the skin. This mask can be used once or twice a week to help brighten and smooth the skin. Additionally, the gel can be used on its own to soothe sunburns, moisturize the skin, reduce the appearance of fine lines and wrinkles, and promote healthy hair growth. Crown Pure 99% Aloe Vera Gel is a versatile and effective product that can improve the overall health and appearance of your skin and hair, regardless of skin type.</p>

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
                  <img src="/images/container.png" className='img-fluid' alt="" />
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
                  <img src="/images/trolly.png" className='img-fluid' alt="" />
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