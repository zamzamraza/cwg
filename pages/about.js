import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div>
            <img src="/images/ABOUTS-US-BANNER-2.jpg" alt="about-us" className='img-fluid' />
      </div>
      <section className='about-section'>
        <Container>
          <Row>
            <Col md={6}>
              <div className="about-heading">
                <h3>Crown WORLDWIDE</h3>
                <h4>Delivering</h4>
                <h4>Quality in</h4>
                <h4>Services</h4>
              </div>
              <div className="about-us">
                <h3>ABOUT CROWN WORLDWIDE</h3>
                <p>Crown Worldwide is one among the most successful retail business in Kuwait, flourishing and expanding accross all markets. We are a decade old company that focuses on meeting consumer needs by being both an importer and distributor of various consumer products. We supply in diverse categories to various hypermarkets, retailers and wholesalers in Kuwait. At Crown worldwide, we offer a variety of products under multiple brands to all customers under different categories like Home Care, Personal Care and Cosmetics. Crown worldwide is an ISO and OHSAS certified company. We stand for high quality products, Professional management and ethical business practices.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-img-container">
                <img src="/images/about-page-image2.jpg" alt="about-page-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* our mission section */}
      <section className='our-mission'>
        <Container>
          <Row>
            <Col md={6}>
              <div className="our-mission-image-box">
                <img src="images/kuwait.png" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="our-mission-content">
                <h3>Our<span>Mission</span></h3>
                <p>Our Corporate identity has been built on the strength of our professional and competent team which is customer centric and Our robust business understanding of the customer and business needs in the region. We are happy to be recognized for leaving a positive imprint on all of our business relationships with our valued customers and partners. Striving towards becoming the best in the food segment, we aim to relentlessly offer distinctive flavours to our progressive consumers. Moving fast on the path to fulfilling aspirations with a global approach, we also aim to deliver the best returns to the society, consumers, and our stakeholders.</p>
     
                {/* <h3 className='second-h2'>Our<span>Origin</span></h3>
                <p>Before becoming a diversified company we started as a Logistics company in the year 2008 as Crown Logistics Co W.L.L. also known as CLC. Crown worldwide was established in the year 2009 along with other divisions. We have subsequently formalized and consolidated all our divisions under Crown Business Group also known as CBG.</p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About