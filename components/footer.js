import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
          <div className='footer-div-wrapper'>
            <Container className='footer-container'>
                <Row>
                    <Col md='3' sm='6' >
                        <h3>ABOUT US</h3>
                        <p>Crown International (CI) is one among the most successful retail business in Kuwait, flourishing and expanding accross all markets.</p>
                    </Col>
                    <Col md ='3' sm='6'>
                        <h3>QUICK LINKS</h3>
                        {/* <ul> */}
                        <a>Home</a>
                        <a>About us</a>
                        <a>Our Products</a>
                        <a>Crown Essentials</a>
                        <a>Our Certificates</a>
                        {/* </ul> */}
                    </Col>
                    <Col md='3' sm='6'>
                      <h3>GET IN TOUCH</h3>
                      <p>  Alhamra Mall, Office No. 805, 8th Floor</p>
                      <p>, Farwaniya, Kuwait.</p>
                      <p>+96551052112</p>
                      <p>info@crownintl-kwt.com</p>
                    </Col>
                    <Col md='3' sm='6'>
                      <h3>GET IN TOUCH</h3>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default Footer